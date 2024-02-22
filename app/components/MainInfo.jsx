import React from "react";
import Image from "next/image";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function MainInfo({
  weather: {
    name,
    country,
    details,
    temp,
    feels_like,
    humidity,
    speed,
    sunrise,
    sunset,
    temp_max,
    temp_min,
    timezone,
    dt,
    icon,
  },
  units,
  setUnits,
}) {
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const getBackgroundColor = (temperature, unit) => {
    const convertedTemp =
      unit === "imperial" ? (temperature - 32) * (5 / 9) : temperature;

    if (convertedTemp >= 30) {
      return "bg-orange-200";
    } else if (convertedTemp <= 0) {
      return "bg-blue-200";
    } else {
      return "bg-slate-200";
    }
  };

  return (
    <>
      <div
        className={`md:h-[320px] mx-5 bg-blue-200 md:mx-16 mt-2 md:mt-8 rounded-3xl shadow-md p-6 font-outfit text-gray-600 ${getBackgroundColor(
          temp,
          units
        )}`}>
        <div className="flex flex-col md:flex-row justify-between px-2">
          <div>
            <button
              onClick={handleUnitsChange}
              name="metric"
              className={`bg-slate-300 px-2 rounded-l-full  ${
                units === "metric"
                  ? "text-white bg-slate-400"
                  : "text-slate-400"
              }`}>
              °Celsius
            </button>
            <button
              onClick={handleUnitsChange}
              name="imperial"
              className={`bg-slate-300 px-2 rounded-r-full   ${
                units === "imperial"
                  ? "text-white bg-slate-400"
                  : "text-slate-400"
              }`}>
              °Fahrenheit
            </button>
          </div>

          <div className="mb-6 md:mb-16 text-gray-400 text-sm md:text-md">
            {formatToLocalTime(dt, timezone)}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center lg:px-20">
          <div className="flex flex-col md:flex-row  items-center ">
            <div>
              <img
                src={iconUrlFromCode(icon)}
                alt="icon"
                width={120}
                height={120}></img>
            </div>
            <div>
              <span className="text-6xl lg:text-7xl font-bold">
                {`${Math.round(temp)}`}°
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center mt-4 md:mt-0">
            <div className="text-5xl lg:text-7xl  font-bold ">{`${name}, ${country}`}</div>
            <div className="mt-3  text-2xl">{`${details}`}</div>
          </div>

          <div className="w-full md:w-36 lg:w-44 font-medium mt-10 md:mt-0 py-8 md:py-0 text-center md:text-right lg:text-left rounded-t-3xl  md:rounded-none text-xl md:text-lg">
            <div className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-500 w-5 h-5"
                viewBox="0 0 320 512">
                <path d="M160 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C86.2 332.6 80 349.5 80 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM48 112C48 50.2 98.1 0 160 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S16 447.5 16 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM208 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V144c0-8.8 7.2-16 16-16s16 7.2 16 16V322.7c18.6 6.6 32 24.4 32 45.3z" />
              </svg>
              Feels Like:{" "}
              <span className="font-bold">
                {" "}
                {`${Math.round(feels_like)}`}°{" "}
              </span>{" "}
            </div>

            <div className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-500 w-5 h-5"
                viewBox="0 0 576 512">
                <path d="M275.5 6.6C278.3 2.5 283 0 288 0s9.7 2.5 12.5 6.6L366.8 103C378 119.3 384 138.6 384 158.3V160c0 53-43 96-96 96s-96-43-96-96v-1.7c0-19.8 6-39 17.2-55.3L275.5 6.6zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
              </svg>
              Humidity: <span className="font-bold"> {`${humidity}`}%</span>
            </div>

            <div className="flex flex-row items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-gray-500 w-5 h-5"
                viewBox="0 0 512 512">
                <path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z" />
              </svg>
              Wind: <span className="font-bold"> {`${speed}`} Km/h </span>
            </div>
          </div>
        </div>
      </div>

      <div className="font-semibold text-gray-600 flex flex-row justify-between items-center mt-10 mx-5 gap-10 md:mx-16">
        <div className="bg-slate-100 rounded-3xl flex flex-col justify-center items-center w-1/4 h-[200px] shadow-md">
          <div className="mb-3">
            <Image
              src="/icons/sunrise.svg"
              alt=""
              width={50}
              height={50}></Image>
          </div>

          <div>
            <span>SUNRISE </span>
          </div>
          <div>
            <span className="text-3xl font-black">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>{" "}
          </div>
        </div>

        <div className="bg-slate-100 rounded-3xl flex flex-col justify-center items-center w-1/4 h-[200px] shadow-md">
          <div className="mb-3">
            <Image
              src="/icons/sunset.svg"
              alt=""
              width={50}
              height={50}></Image>
          </div>

          <div>
            <span> SUNSET </span>
          </div>
          <div>
            <span className="text-3xl font-black">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>{" "}
          </div>
        </div>

        <div className="bg-slate-100 rounded-3xl flex flex-col justify-center items-center w-1/4 h-[200px] shadow-md">
          <div className="mb-3">
            <Image
              src="/icons/temp-low.svg"
              alt=""
              width={50}
              height={50}></Image>
          </div>

          <div>
            <span> LOW </span>
          </div>

          <div>
            <span className="text-3xl font-black">
              {`${Math.round(temp_min)}`}°
            </span>
          </div>
        </div>

        <div className="bg-slate-100 rounded-3xl flex flex-col justify-center items-center w-1/4 h-[200px] shadow-md">
          <div className="mb-3">
            <Image
              src="/icons/temp-up.svg"
              alt=""
              width={50}
              height={50}></Image>
          </div>

          <div>
            <span> HIGH </span>
          </div>
          <div>
            <span className="text-3xl font-black">
              {`${Math.round(temp_max)}`}°
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainInfo;
