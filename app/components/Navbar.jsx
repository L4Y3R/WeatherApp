"use client";

import React, { useState } from "react";
import Image from "next/image";

function Navbar({ setQuery }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <nav className="flex items-center justify-between px-5 md:px-10 lg:px-28 h-16 mt-2">
      <div className="flex">
        <div>
          <h1 className="font-outfit font-bold text-md md:text-2xl text-gray-600">
            Weather App
          </h1>
        </div>
        <div>
          <Image src="/logo/logo.svg" alt="logo" width={20} height={20}></Image>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="p-2 ml-3 md:p-3 rounded-full bg-gray-200 flex items-center w-44 md:w-72">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            type="text"
            className="w-full outline-none bg-transparent"
            placeholder="Search for a location..."
          />
          <svg
            onClick={handleSearch}
            className="w-6 h-6 text-gray-500 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4-4m2-6a8 8 0 10-16 0 8 8 0 0016 0z"></path>
          </svg>
        </div>
        <Image
          onClick={handleLocationClick}
          src="/icons/location.svg"
          alt="location icon"
          width={30}
          height={30}
          className="transition ease-out hover:scale-110 "
        />
      </div>
    </nav>
  );
}

export default Navbar;
