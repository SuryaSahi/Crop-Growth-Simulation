import React from 'react';
import { CropData } from '../../types';

interface Props {
  cropData: CropData;
  time: number;
}

export default function CropStats({ cropData, time }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="p-3 bg-gray-50 rounded">
        <p className="font-semibold">Growth Stage: {cropData.growthStage}/5</p>
      </div>
      <div className="p-3 bg-gray-50 rounded">
        <p className="font-semibold">Health: {cropData.health.toFixed(1)}%</p>
      </div>
      <div className="p-3 bg-gray-50 rounded">
        <p className="font-semibold">Yield: {cropData.yield.toFixed(1)} units</p>
      </div>
      <div className="p-3 bg-gray-50 rounded">
        <p className="font-semibold">Time: {time}s</p>
      </div>
    </div>
  );
}