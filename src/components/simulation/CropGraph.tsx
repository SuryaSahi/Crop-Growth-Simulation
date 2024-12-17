import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface DataPoint {
  time: number;
  health: number;
  yield: number;
  moisture: number;
  temperature: number;
}

interface Props {
  data: DataPoint[];
}

export default function CropGraph({ data }: Props) {
  return (
    <div className="w-full h-64 mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="time" 
            label={{ value: 'Time (s)', position: 'insideBottom', offset: -5 }} 
          />
          <YAxis label={{ value: 'Values', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="health" 
            stroke="#8884d8" 
            name="Health"
          />
          <Line 
            type="monotone" 
            dataKey="yield" 
            stroke="#82ca9d" 
            name="Yield"
          />
          <Line 
            type="monotone" 
            dataKey="moisture" 
            stroke="#ffc658" 
            name="Moisture"
          />
          <Line 
            type="monotone" 
            dataKey="temperature" 
            stroke="#ff7300" 
            name="Temperature"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}