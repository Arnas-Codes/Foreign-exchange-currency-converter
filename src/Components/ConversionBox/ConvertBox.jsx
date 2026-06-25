import React from "react";

const ConvertBox = () => {
  return (
    <div className="mt-12 max-w-5xl flex flex-col justify-start mx-auto ">
      <h1 className="leading-[1.2] tracking-[-0.5px]">CHECK THE RATE</h1>
      <div className="bg-[#202022] mt-4 h-40 flex gap-8.75 items-center p-5 rounded-t-[20px] border-b border-dashed border-white/10">
        <div className="bg-[#2E2E2E] h-28 w-112.5 rounded-2xl flex flex-col  p-5">
          <p className="uppercase text-[#C6C6C6] text-[14px]">Send</p>
          <div className="flex justify-between items-center">
            <p className="text-[40px] font-bold">1000</p>
            <div className="h-10 flex justify-center px-4">
              <select
                className="px-[11.5px] rounded-lg bg-[#3D3D3D]"
                name=""
                id=""
              >
                <option value="">USA</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-[#2E2E2E] w-12 h-12"></div>
        <div className="bg-[#2E2E2E] h-28 w-112.5 rounded-2xl flex flex-col  p-5">
          <p className="uppercase text-[#C6C6C6] text-[14px]">RECEIVE</p>
          <div className="flex justify-between items-center">
            <p className="text-[40px] font-bold text-[#CEF739]">853.02</p>
            <div className="h-10 flex justify-center px-4">
              <select
                className="px-[11.5px] rounded-lg bg-[#3D3D3D]"
                name=""
                id=""
              >
                <option value="">EUR</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#202022] rounded-b-[20px] flex justify-between px-5 py-6">
        <p className="text-[12px] ">1 USD = 0.8530 EUR</p>
        <div className="flex text-black gap-5 font-medium">
          <button className=" bg-[#CEF739] rounded-lg w-29.25 h-8">FAVORITED</button>
          <button className="border-[#CEF739] text-white border rounded-lg w-43 h-
          ">LOG CONVERSION</button>
        </div>
      </div>
    </div>
  );
};

export default ConvertBox;
