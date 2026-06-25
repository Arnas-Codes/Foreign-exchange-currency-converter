import React from "react";
import { CompareData } from "./CompareData";

const Compare = () => {
  return (
    <div className=" max-w-5xl mx-auto pb-12">
      <div className="mt-5 flex items-center justify-between bg-[#171719] p-5 ">
        <h2>MULTI-CURRENCY 1,000 FROM USD</h2>
        <p>8 PAIRS</p>
      </div>
      <div className="flex flex-col gap-3 p-5">
        {CompareData.map((data) => (
          <div className="flex px-5 justify-between rounded-lg h-14 bg-[#2E2E2E]" key={data.id}>
            <div className="flex">
              <img src={data.img} alt="" />
              <div>
                <p>{data.name}</p>
                <p>{data.currency}</p>
              </div>
            </div>
            <div>
              <p>{data.price}</p>
              <p>@ {data.priceInone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Compare;
     