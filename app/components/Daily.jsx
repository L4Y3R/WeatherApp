import React from "react";
import Image from "next/image";

function Daily() {
  return (
    <>
      <span className="mx-5 md:mx-16 font-outfit mt-20 font-bold text-2xl text-gray-600">
        Daily Forecast
      </span>
      <div className="overflow-x-scroll flex justify-between mx-5 md:mx-16 mt-6 font-outfit text-gray-600 gap-2 md:gap-5">
        <div className="bg-slate-100 md:h-[200px] w-80 rounded-3xl shadow-md py-3 mb-5 flex flex-col items-center">
          <div className="w-32 h-10 md:w-20 md:h-8 font-bold text-xl rounded-full md:bg-slate-200 text-center">
            WED
          </div>
          <div className="md:mt-3 flex flex-col items-center">
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={80}
              height={80}></Image>
            <span className="text-3xl md:text-5xl font-bold">18</span>
          </div>
        </div>
        <div className="bg-slate-100 md:h-[200px] w-80 rounded-3xl shadow-md py-3 mb-5 flex flex-col items-center">
          <div className="w-32 h-10 md:w-20 md:h-8 font-bold text-xl rounded-full md:bg-slate-200 text-center">
            THUR
          </div>
          <div className="md:mt-3 flex flex-col items-center">
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={80}
              height={80}></Image>
            <span className="text-3xl md:text-5xl font-bold">18</span>
          </div>
        </div>

        <div className="bg-slate-100 md:h-[200px] w-80 rounded-3xl shadow-md py-3 mb-5 flex flex-col items-center">
          <div className="w-32 h-10 md:w-20 md:h-8 font-bold text-xl rounded-full md:bg-slate-200 text-center">
            FRI
          </div>
          <div className="md:mt-3 flex flex-col items-center">
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={80}
              height={80}></Image>
            <span className="text-3xl md:text-5xl font-bold">18</span>
          </div>
        </div>

        <div className="bg-slate-100 md:h-[200px] w-80 rounded-3xl shadow-md py-3 mb-5 flex flex-col items-center">
          <div className="w-32 h-10 md:w-20 md:h-8 font-bold text-xl rounded-full md:bg-slate-200 text-center">
            SAT
          </div>
          <div className="md:mt-3 flex flex-col items-center">
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={80}
              height={80}></Image>
            <span className="text-3xl md:text-5xl font-bold">18</span>
          </div>
        </div>

        <div className="bg-slate-100 md:h-[200px] w-80 rounded-3xl shadow-md py-3 mb-5 flex flex-col items-center">
          <div className="w-32 h-10 md:w-20 md:h-8 font-bold text-xl rounded-full md:bg-slate-200 text-center">
            SUN
          </div>
          <div className="md:mt-3 flex flex-col items-center">
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={80}
              height={80}></Image>
            <span className="text-3xl md:text-5xl font-bold">18</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Daily;
