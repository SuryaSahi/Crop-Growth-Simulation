import React from 'react';

interface Props {
  moisture: number;
  temperature: number;
  onMoistureChange: (value: number) => void;
  onTemperatureChange: (value: number) => void;
}

export default function CropControls({
  moisture,
  temperature,
  onMoistureChange,
  onTemperatureChange
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Moisture</label>
        <input
          type="range"
          min="0"
          max="100"
          value={moisture}
          onChange={(e) => onMoistureChange(Number(e.target.value))}
          className="w-full"
        />
        <span>{moisture}%</span>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Temperature</label>
        <input
          type="range"
          min="0"
          max="40"
          value={temperature}
          onChange={(e) => onTemperatureChange(Number(e.target.value))}
          className="w-full"
        />
        <span>{temperature}°C</span>
      </div>
    </div>
  );
}