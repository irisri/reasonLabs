"use client";

import { useWeatherQuery } from "@/hooks/useWeatherQuery";
import { Variant, WeatherDisplayVariant } from "@/types";
import { WeatherDisplayVariantB } from "./WeatherDisplayVariantB";
import { WeatherDisplayVariantA } from "./WeatherDisplayVariantA";
import { FC } from "react";

const variantMap: Record<Variant, FC<WeatherDisplayVariant>> = {
  A: WeatherDisplayVariantA,
  B: WeatherDisplayVariantB,
};

type Props = {
  city: string;
  variant: Variant;
};

const getWeatherDisplayComponent = (
  variant: Variant
): FC<WeatherDisplayVariant> => {
  return variantMap[variant] || variantMap.A;
};

export function WeatherDisplay({ city, variant }: Props) {
  const { weather, loading, error } = useWeatherQuery(city);
  console.log("v", variant);

  if (loading)
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-800 rounded-xl shadow-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return (
      <div className="w-full p-6 bg-red-900/20 rounded-xl shadow-lg">
        <div className="text-red-400 text-center">
          <span className="font-semibold">Error:</span> {error}
        </div>
      </div>
    );

  if (!weather) return null;

  const WeatherComponent = getWeatherDisplayComponent(variant);

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
      <WeatherComponent city={city} weather={weather} />
    </div>
  );
}
