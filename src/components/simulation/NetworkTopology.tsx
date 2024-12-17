import React from 'react';
import { Network } from 'lucide-react';
import { IoTDevice } from '../../types';

interface Props {
  devices: IoTDevice[];
  onDeviceClick: (device: IoTDevice) => void;
}

export default function NetworkTopology({ devices, onDeviceClick }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Network Topology</h2>
      <div className="grid grid-cols-3 gap-4">
        {devices.map((device) => (
          <div
            key={device.id}
            onClick={() => onDeviceClick(device)}
            className={`p-4 rounded-lg cursor-pointer transition-colors ${
              device.status === 'online' ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            <Network className="w-6 h-6 mb-2" />
            <h3 className="font-semibold">{device.name}</h3>
            <p className="text-sm text-gray-600">{device.type}</p>
            <p className="text-sm text-gray-600">Status: {device.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}