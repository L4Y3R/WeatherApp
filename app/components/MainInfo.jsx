import React from "react";
import Image from "next/image";

function MainInfo() {
  return (
    <div className="bg-slate-100 h-[320px] mx-16 mt-8 rounded-3xl shadow-md p-6 font-outfit text-gray-600">
      <div className="flex justify-between px-2">
        <div>
          <button className="bg-slate-300 px-2 rounded-l-full hover:bg-slate-400 font-bold">
            C
          </button>
          <button className="bg-slate-300 px-2 rounded-r-full hover:bg-slate-400 font-bold">
            F
          </button>
        </div>

        <div className=" mb-16 text-gray-400">
          Tuesday, 31 May 2024 | Local Time: 12.17PM
        </div>
      </div>

      <div className="flex justify-between items-center px-20">
        <div className="flex gap-6 items-center ">
          <div>
            <Image
              src="/placeholders/cloud-solid.svg"
              alt="icon"
              width={100}
              height={100}></Image>
          </div>
          <div>
            <span className="text-7xl font-bold">18</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-7xl  font-bold ">Berlin, CN</div>
          <div className="  text-2xl">Clear</div>
        </div>

        <div className="w-44 font-medium">
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
      <div className="text-center mt-14 font-semibold text-gray-400">
        <span className="mr-20">Rise 04:50AM</span>
        <span className="mr-20">Set 9:17PM</span>
        <span className="mr-20">High 19</span>
        <span>Low 17</span>
      </div>
    </div>
  );
}

export default MainInfo;
