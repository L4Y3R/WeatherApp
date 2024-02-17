import React from "react";
import Image from "next/image";

function MainInfo() {
  return (
    <div className="bg-slate-100 md:h-[320px] mx-5 md:mx-16 mt-2 md:mt-8 rounded-3xl shadow-md p-6 font-outfit text-gray-600">
      <div className="flex flex-col md:flex-row justify-between px-2">
        <div>
          <button className="bg-slate-300 px-2 rounded-l-full hover:bg-slate-400 font-bold">
            C
          </button>
          <button className="bg-slate-300 px-2 rounded-r-full hover:bg-slate-400 font-bold">
            F
          </button>
        </div>

        <div className="mb-6 md:mb-16 text-gray-400 text-sm md:text-md">
          Tuesday, 31 May 2024 | Local Time: 12.17PM
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center lg:px-20">
        <div className="flex flex-col md:flex-row md:gap-6 items-center ">
          <div>
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={100}
              height={100}></Image>
          </div>
          <div>
            <span className="text-6xl lg:text-7xl font-bold">18</span>
          </div>
        </div>

        <div className="flex flex-col items-center mt-4 md:mt-0">
          <div className="text-5xl lg:text-7xl  font-bold ">Berlin, CN</div>
          <div className="  text-2xl">Clear</div>
        </div>

        <div className="w-full md:w-36 lg:w-44 font-medium mt-10 md:mt-0 py-8 md:py-0 text-center md:text-right lg:text-left rounded-t-3xl bg-slate-200 md:rounded-none md:bg-slate-100 text-xl md:text-lg">
          <div>
            Temperature: <span className="font-bold"> 18</span>{" "}
          </div>
          <div>
            Humidity: <span className="font-bold"> 18</span>
          </div>
          <div>
            Wind: <span className="font-bold"> 18</span>
          </div>
        </div>
      </div>
      <div className="text-center mt-1 md:mt-16 lg:mt-12 font-semibold text-gray-600  text-xs md:text-md bg-slate-200  py-4 md:py-3 rounded-b-3xl md:rounded-full md:mx-16 lg:mx-72">
        <span className="mr-5 md:mr-20">Rise 04:50AM</span>
        <span className="mr-5 md:mr-20">Set 9:17PM</span>
        <span className="mr-5 md:mr-20">High 19</span>
        <span>Low 17</span>
      </div>
    </div>
  );
}

export default MainInfo;
