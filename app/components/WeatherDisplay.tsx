"use client";

import { useWeatherQuery } from "@/hooks/useWeatherQuery";
import { Variant, WeatherDisplayVariant } from "@/types";
import { WeatherDisplayVariantB } from "./WeatherDisplayVariantB";
import { WeatherDisplayVariantA } from "./WeatherDisplayVariantA";
import { ErrorMessage } from "./ErrorMessage";
import { FC } from "react";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const variantMap: Record<Variant, FC<WeatherDisplayVariant>> = {
  A: WeatherDisplayVariantA,
  B: WeatherDisplayVariantB,
};

type Props = {
  city: string;
};

const getWeatherDisplayComponent = (
  variant: Variant
): FC<WeatherDisplayVariant> => {
  return variantMap[variant] || variantMap.A;
};

export function WeatherDisplay({ city }: Props) {
  const variant = useSelector((state: RootState) => state.variant.testVariant);

  const { weather, loading, error } = useWeatherQuery(city);

  if (loading)
    return (
      <div className="w-full h-64 flex items-center justify-center bg-gray-800 rounded-xl shadow-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error) return <ErrorMessage error={error} />;

  if (!weather) return null;

  const WeatherComponent = getWeatherDisplayComponent(variant);

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
      <WeatherComponent city={city} weather={weather} />
    </div>
  );
}
