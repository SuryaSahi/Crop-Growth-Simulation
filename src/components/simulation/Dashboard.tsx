import React, { useState } from 'react';
import NetworkTopology from './NetworkTopology';
import CropSimulation from './CropSimulation';
import DeviceDetails from './DeviceDetails';
import { IoTDevice } from '../../types';

const mockDevices: IoTDevice[] = [
  { id: '1', name: 'Temperature Sensor 1', status: 'online', type: 'sensor', data: { temperature: 25 } },
  { id: '2', name: 'Humidity Sensor 1', status: 'online', type: 'sensor', data: { humidity: 65 } },
  { id: '3', name: 'Irrigation Control', status: 'online', type: 'actuator', data: {} },
];

export default function Dashboard() {
  const [devices] = useState<IoTDevice[]>(mockDevices);
  const [selectedDevice, setSelectedDevice] = useState<IoTDevice | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">SDN Simulation Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <NetworkTopology 
          devices={devices}
          onDeviceClick={setSelectedDevice}
        />
        <CropSimulation />
      </div>

      {selectedDevice && <DeviceDetails device={selectedDevice} />}
    </div>
  );
}