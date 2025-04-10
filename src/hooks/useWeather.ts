// src/hooks/useUsers.ts
import { useQuery } from "@tanstack/react-query";
import { fetchCityWeathers } from "../api/weather";
import { MockWeatherData } from "../types/weather";

export const useCityWeathersQuery = () => {
  return useQuery<MockWeatherData[]>({
    queryKey: ["users"],
    queryFn: fetchCityWeathers,
  });
};
