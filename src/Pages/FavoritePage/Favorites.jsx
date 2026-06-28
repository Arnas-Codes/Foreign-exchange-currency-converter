import React from "react";
import { FavoriteData } from "./FavoriteData";

const Fovorite = () => {
  return (
    <div className=" max-w-5xl mx-auto pb-12">
      <div className="mt-5 flex items-center justify-between bg-[#171719] p-5 ">
        <h2>MULTI-CURRENCY 1,000 FROM USD</h2>
        <p>8 PAIRS</p>
      </div>
      <div className="flex flex-col gap-3 px-5 pb-5 bg-[#171719]">
        {FavoriteData.map((data) => (
          <div
            className="flex items-center px-5 justify-between rounded-lg h-14 bg-[#2E2E2E]"
            key={data.id}
          >
            <div className="flex gap-2 ">
              <p>{data.fromC}</p>
              <p>To</p>
              <p>{data.toC}</p>
            </div>
            <div className="flex gap-3">
              <div>   <p> {data.price}</p>

              <p>+{data.change}%</p></div>
           
              <button className="border px-4">Fav</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fovorite;
