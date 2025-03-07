import { City } from "@/types";
import { sessionStoreUtil } from "./util";
import { RECENT_CITIES_KEY } from "@/consts";

export const addToRecentCities = (cityName: string) => {
  const cities: City[] = sessionStoreUtil.get(RECENT_CITIES_KEY) || [];
  const cityIndex = cities.findIndex((city) => city.name === cityName);

  if (cityIndex > -1) {
    const currentCity = cities.splice(cityIndex, 1);
    cities.unshift(...currentCity);
  } else {
    cities.unshift({
      name: cityName,
      lastViewed: Date.now(),
      isFavorite: false,
    });
  }

  // Keep only last 5 cities
  const updatedCities = cities.slice(0, 5);
  sessionStoreUtil.set(RECENT_CITIES_KEY, updatedCities);
  return updatedCities;
};
