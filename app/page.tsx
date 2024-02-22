"use client";

import MainInfo from "./components/MainInfo";

import Navbar from "./components/Navbar";

import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

interface WeatherType {
  lat: number;
  lon: number;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
  name: string;
  dt: Date;
  country: string;
  sunrise: number;
  sunset: number;
  details: string;
  icon: string;
  speed: number;
}

export default function Home() {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState<WeatherType | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <>
      <Navbar setQuery={setQuery} />
      {weather && (
        <div>
          <MainInfo weather={weather} units={units} setUnits={setUnits} />
        </div>
      )}
    </>
  );
}
