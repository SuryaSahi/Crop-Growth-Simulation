import React, { useState, useEffect } from 'react';
import { Sprout } from 'lucide-react';
import { CropData } from '../../types';
import { calculateCropGrowth } from '../../utils/simulation';
import CropControls from './CropControls';
import CropStats from './CropStats';
import CropGraph from './CropGraph';

interface DataPoint {
  time: number;
  health: number;
  yield: number;
  moisture: number;
  temperature: number;
}

export default function CropSimulation() {
  const [time, setTime] = useState(0);
  const [moisture, setMoisture] = useState(70);
  const [temperature, setTemperature] = useState(25);
  const [cropData, setCropData] = useState<CropData>({
    growthStage: 0,
    health: 100,
    yield: 0,
    moisture: 70,
    temperature: 25,
  });
  const [graphData, setGraphData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
      const newData = calculateCropGrowth(moisture, temperature, time);
      setCropData(newData);
      
      setGraphData(prevData => {
        const newPoint = {
          time,
          health: newData.health,
          yield: newData.yield,
          moisture: newData.moisture,
          temperature: newData.temperature
        };
        
        // Keep last 30 data points for better visualization
        const updatedData = [...prevData, newPoint];
        if (updatedData.length > 30) {
          return updatedData.slice(-30);
        }
        return updatedData;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [moisture, temperature, time]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <Sprout className="w-6 h-6 mr-2" />
        <h2 className="text-xl font-bold">Crop Simulation</h2>
      </div>
      
      <CropControls
        moisture={moisture}
        temperature={temperature}
        onMoistureChange={setMoisture}
        onTemperatureChange={setTemperature}
      />

      <CropStats
        cropData={cropData}
        time={time}
      />

      <CropGraph data={graphData} />
    </div>
  );
}