export type WeatherData = {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  fealsLike: number;
};

export type City = {
  name: string;
  lastViewed: number;
  isFavorite: boolean;
};

export type Variant = "A" | "B";

export interface CityResponse {
  name: string;
  lat: number;
  lon: number;
}

export interface WeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: {
    description: string;
  }[];
}
