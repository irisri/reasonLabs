import { WeatherDisplayVariant } from "@/types";
import { WeatherIcon } from "./WeatherIcon";
import { Droplets, Wind, Thermometer } from "lucide-react";

export function WeatherDisplayVariantB({
  city,
  weather,
}: WeatherDisplayVariant) {
  return (
    <div className="flex flex-col md:justify-between gap-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-[#3863E3] to-[#6EA1F3] text-transparent bg-clip-text capitalize">
          {city}
        </h2>
        <span className="px-2 py-1 text-base border border-[#394150] text-[#9DC4F8] rounded-full bg-[#394150]">
          Celsius
        </span>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <WeatherIcon description={weather.description} />
          <div>
            <p className="text-6xl font-bold text-[#70A3F3]">
              {Math.round(weather.temperature)}°C
            </p>
            <p className="text-lg text-[#D2D5DA] capitalize">
              {weather.description}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-8">
        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-gray-400 mb-1">
            <Droplets className="w-4 h-4" color={"#70A3F3"} />
            Humidity
          </div>
          <dd className="text-2xl font-semibold text-gray-100">
            {weather.humidity}%
          </dd>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-gray-400 mb-1">
            <Wind className="w-4 h-4" color={"#70A3F3"} />
            Wind Speed
          </div>
          <dd className="text-2xl font-semibold text-gray-100">
            {weather.windSpeed} m/s
          </dd>
        </div>

        <div className="bg-gray-700/50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-gray-400 mb-1">
            <Thermometer className="w-4 h-4" color={"#70A3F3"} />
            Feels like
          </div>
          <dd className="text-2xl font-semibold text-gray-100">
            {weather.fealsLike}°C
          </dd>
        </div>
      </div>
    </div>
  );
}
