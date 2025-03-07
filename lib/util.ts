import { City, WeatherData, WeatherResponse } from "@/types";

export const convertWeatherResponseToWeatherData = (
  wetherResponse: WeatherResponse
): WeatherData => {
  return {
    temperature: wetherResponse.main.temp,
    description: wetherResponse.weather[0].description,
    humidity: wetherResponse.main.humidity,
    windSpeed: wetherResponse.wind.speed,
    fealsLike: wetherResponse.main.feels_like,
  };
};

export const sessionStoreUtil = {
  get: (key: string) => {
    const data = sessionStorage.getItem(key);
    if (!data) return null;
    return JSON.parse(data);
  },
  set: (key: string, data: string | City[]) =>
    sessionStorage.setItem(key, JSON.stringify(data)),
};
