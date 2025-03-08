"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorBoundary from "@/app/components/ErrorBoundary";
import RecentSearches from "@/app/components/RecentSearches";
import SearchBar from "@/app/components/SearchBar";
import { WeatherDisplay } from "@/app/components/WeatherDisplay";
import { getVariant } from "@/lib/abTest";
import { addToRecentCities } from "@/lib/storage";
import { City, Variant } from "@/types";
import { sessionStoreUtil } from "@/lib/util";
import { RECENT_CITIES_KEY, VARIANT_TESTING_KEY } from "@/consts";
import { RootState } from "./store";
import { setTestVariant } from "./redux/variantSlice";
import { setCities, setSelectedCity } from "./redux/weatherSlice";

export default function Home() {
  const selectedCity = useSelector(
    (state: RootState) => state.weather.selectedCity
  );
  const cities = useSelector((state: RootState) => state.weather.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    let currentVariant = sessionStoreUtil.get(VARIANT_TESTING_KEY) as Variant;
    let storageCities: City[] = sessionStoreUtil.get(RECENT_CITIES_KEY) || [];

    if (storageCities.length > 0) {
      dispatch(setCities(storageCities));
    }

    if (!currentVariant) {
      currentVariant = getVariant();
      sessionStoreUtil.set(VARIANT_TESTING_KEY, currentVariant);
    }

    dispatch(setTestVariant(currentVariant));
  }, []);

  const handleSearch = async (city: string) => {
    const response = await fetch(`/api/location/search?query=${city}`);
    const data = await response.json();
    if (data.length > 0) {
      dispatch(setSelectedCity(city));
      const updatedCities = addToRecentCities(city);
      dispatch(setCities(updatedCities));
    }
  };

  const selectCity = (cityName: string) => {
    dispatch(setSelectedCity(cityName));
  };

  return (
    <ErrorBoundary>
      <main className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-800 p-4">
        <div className="flex justify-between md:items-center mb-3 flex-col gap-2 md:flex-row">
          <div className="flex flex-col gap-4">
            <p className="text-blue-300">
              Enter a city name to get the current weather conditions
            </p>
          </div>
        </div>

        <SearchBar onSearch={handleSearch} />

        {selectedCity && <WeatherDisplay city={selectedCity} />}

        <RecentSearches cities={cities} onCityClick={selectCity} />
      </main>
    </ErrorBoundary>
  );
}
