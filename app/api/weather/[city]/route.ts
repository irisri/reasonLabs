import { BASE_URL } from "@/consts";
import { convertWeatherResponseToWeatherData } from "@/lib/util";
import { CityResponse, WeatherData, WeatherResponse } from "@/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { city: string } }
) {
  const { city } = await params;
  const cityName = city;
  const API_KEY = process.env.API_KEY;
  const cityUrl = `${BASE_URL}/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
  try {
    const cityResponse = await fetch(cityUrl);
    const cities: CityResponse[] = await cityResponse.json();

    if (cities.length === 0) {
      return NextResponse.json(
        { error: `Location not found - ${cityName}` },
        { status: 404 }
      );
    }

    const city = cities[0];
    const { lat, lon } = city;

    const weatherUrl = `${BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData: WeatherResponse = await weatherResponse.json();

    const data: WeatherData = convertWeatherResponseToWeatherData(weatherData);

    if (!weatherResponse.ok) {
      return NextResponse.json(
        { error: data.description || "Weather data not found" },
        { status: weatherResponse.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
