import React from 'react';
import { IoTDevice } from '../../types';

interface Props {
  device: IoTDevice;
}

export default function DeviceDetails({ device }: Props) {
  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Device Details</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-semibold">ID: {device.id}</p>
          <p className="font-semibold">Name: {device.name}</p>
        </div>
        <div>
          <p className="font-semibold">Type: {device.type}</p>
          <p className="font-semibold">Status: {device.status}</p>
        </div>
      </div>
    </div>
  );
}