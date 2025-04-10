export interface WeatherData {
  temperature: {
    current: number;
    min: number;
    max: number;
    unit: string;
  };
  humidity: number;
  wind: {
    speed: number;
    direction: string;
    unit: string;
  };
}

export interface MockWeatherData {
  [key: string]: WeatherData;
}
