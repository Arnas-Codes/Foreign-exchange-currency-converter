import React from "react";
import { PageData } from "./HistoryData";
import Charts from "./Charts";


const History = () => {
  return (
    <div className=" max-w-5xl mx-auto pb-12">
      <div className="mt-5 flex items-center justify-between">
        <div className="h-20 flex gap-3">
          {PageData.map((data, i) => (
            <div
              className="w-35 flex flex-col bg-[#171719] py-2 gap-2 px-5 rounded-2xl"
              key={i}
            >
              <p className="text-[16px] ">{data.text}</p>
              <p className={`text-[20px] ${data.isUp && "text-[#42EB05]"}`}>
                {data.value}
              </p>
            </div>
          ))}
        </div>
        <div className="flex rounded-lg bg-[#202022] h-11 items-center">
          {["1D", "1W", "1M", "3M", "1Y", "5Y"].map((data, i) => (
            <div
              className={`h-9 py-2 px-4 rounded-lg ${i === 2 && "bg-[#2E2E2E]"} `}
              key={i}
            >
              <button>{data}</button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full h-94.25 bg-[#202022] mt-5 rounded-lg">
        <div className="flex justify-between p-5 font-medium">
          <p>USD/EUR</p>
          <p>0.8530 · MAY 14 16:00 CET</p>
        </div>
        <div> <Charts /></div>
       
      </div>
    </div>
  );
};

export default History;
