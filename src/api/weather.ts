// src/api/users.ts
import { MockWeatherData } from "../types/weather";

export const fetchCityWeathers = async (): Promise<MockWeatherData[]> => {
  const res = await fetch(
    "https://my-json-server.typicode.com/jayeann/weather/db"
  );
  if (!res.ok) throw new Error("Failed to fetch weather");
  return res.json();
};
