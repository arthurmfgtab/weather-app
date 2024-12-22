import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MIN_LOCATION_LENGTH = 3;

const api = axios.create({
  baseURL: "http://api.weatherapi.com/v1",
});

async function fetchWeatherInfo(location: string): Promise<WeatherData> {
  const response = await api.get(
    `/forecast.json?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${location}&days=5`
  );
  return response.data;
}

export function useWeather(location: string) {
  return useQuery({
    queryKey: ["weather", location],
    queryFn: () => fetchWeatherInfo(location),
    enabled: !!location && location.length >= MIN_LOCATION_LENGTH,
  });
}