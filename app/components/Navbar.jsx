import React from "react";
import Image from "next/image";
import { Chip } from "@nextui-org/react";

function Navbar() {
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
        <Chip variant="flat">London</Chip>
        <Chip variant="flat">Sydney</Chip>
        <Chip variant="flat">Tokyo</Chip>
        <Chip variant="flat">Toronto</Chip>
        <Chip variant="flat" className="hidden md:flex">
          Paris
        </Chip>
      </div>

      <div>
        <div className="p-2 ml-3 md:p-3 rounded-full bg-gray-200 flex items-center w-44 md:w-72">
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
          <input
            type="text"
            className="w-full outline-none bg-transparent"
            placeholder="Search for a location..."
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
