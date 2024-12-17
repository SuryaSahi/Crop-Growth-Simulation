export interface User {
  id: string;
  email: string;
  name: string;
}

export interface IoTDevice {
  id: string;
  name: string;
  status: 'online' | 'offline';
  type: 'sensor' | 'actuator';
  data: {
    temperature?: number;
    humidity?: number;
    soilMoisture?: number;
  };
}

export interface CropData {
  growthStage: number;
  health: number;
  yield: number;
  moisture: number;
  temperature: number;
}