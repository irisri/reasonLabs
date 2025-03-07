import { WeatherData, WeatherResponse } from "@/types";

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
