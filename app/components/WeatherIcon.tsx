import { Cloud, CloudRain, Sun } from "lucide-react";

export function WeatherIcon({ description }: { description: string }) {
  const icon = description.toLowerCase().includes("rain") ? (
    <CloudRain className="w-8 h-8" />
  ) : description.toLowerCase().includes("cloud") ? (
    <Cloud className="w-8 h-8" />
  ) : (
    <Sun className="w-8 h-8" />
  );

  return <div className="bg-blue-900 p-3 rounded-full">{icon}</div>;
}
