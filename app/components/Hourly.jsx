import React from "react";
import Image from "next/image";

function Hourly() {
  return (
    <>
      <span className="mx-5 md:mx-16 font-outfit mt-20 font-bold text-2xl text-gray-600">
        Hourly Forecast
      </span>
      <div className="flex justify-between mx-5 md:mx-16 mt-6 font-outfit text-gray-600 gap-5">
        <div className="bg-slate-100 md:h-[200px] w-80    rounded-3xl shadow-md py-3 flex flex-col items-center">
          <div className="font-bold text-xl rounded-full bg-slate-200 px-3">
            1.00PM
          </div>
          <div className="mt-3 flex flex-col items-center">
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={80}
              height={80}></Image>
            <span className="text-5xl font-bold">18</span>
          </div>
        </div>
        <div className="bg-slate-100 md:h-[200px] w-80   rounded-3xl shadow-md py-3 flex flex-col items-center">
          <div className="font-bold text-xl rounded-full bg-slate-200 px-3">
            1.00PM
          </div>
          <div className="mt-3 flex flex-col items-center">
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={80}
              height={80}></Image>
            <span className="text-5xl font-bold">18</span>
          </div>
        </div>
        <div className="bg-slate-100 md:h-[200px] w-80  rounded-3xl shadow-md py-3 flex flex-col items-center">
          <div className="font-bold text-xl rounded-full bg-slate-200 px-3">
            1.00PM
          </div>
          <div className="mt-3 flex flex-col items-center">
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={80}
              height={80}></Image>
            <span className="text-5xl font-bold">18</span>
          </div>
        </div>
        <div className="bg-slate-100 md:h-[200px] w-80  rounded-3xl shadow-md py-3 flex flex-col items-center">
          <div className="font-bold text-xl rounded-full bg-slate-200 px-3">
            1.00PM
          </div>
          <div className="mt-3 flex flex-col items-center">
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={80}
              height={80}></Image>
            <span className="text-5xl font-bold">18</span>
          </div>
        </div>
        <div className="bg-slate-100 md:h-[200px] w-80   rounded-3xl shadow-md py-3 flex flex-col items-center">
          <div className="font-bold text-xl rounded-full bg-slate-200 px-3">
            1.00PM
          </div>
          <div className="mt-3 flex flex-col items-center">
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={80}
              height={80}></Image>
            <span className="text-5xl font-bold">18</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hourly;
