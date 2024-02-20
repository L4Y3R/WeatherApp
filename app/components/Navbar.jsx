import React from "react";
import Image from "next/image";

function Navbar() {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydeney",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

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

      <div className="gap-3 hidden lg:flex">
        {cities.map((city) => (
          <button
            key={city.id}
            className="rounded-full bg-slate-100 hover:bg-slate-200 px-3 font-medium font-outfit">
            {city.title}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <div className="p-2 ml-3 md:p-3 rounded-full bg-gray-200 flex items-center w-44 md:w-72">
          <input
            type="text"
            className="w-full outline-none bg-transparent"
            placeholder="Search for a location..."
          />
          <svg
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
