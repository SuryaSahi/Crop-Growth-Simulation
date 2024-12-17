import { IoTDevice, CropData } from '../types';

export const generateRandomData = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const calculateCropGrowth = (
  moisture: number,
  temperature: number,
  time: number
): CropData => {
  const health = Math.min(100, (moisture * 0.4 + temperature * 0.6) * (1 + time * 0.1));
  const growthStage = Math.min(5, Math.floor(time / 20));
  
  return {
    growthStage,
    health,
    yield: health * growthStage * 0.2,
    moisture,
    temperature
  };
};