import React, { useEffect, useState } from "react";
import { getData } from "../../Api/CurrencyApi/CurrencyApi";

const ConvertBox = () => {
  const [baseCurrency, SetBaseCurrency] = useState("USD");
  const [rates, setRates] = useState({});
  const [data, SetData] = useState([]);
  const [error, SetError] = useState(null);
  const [input, setInput] = useState(1);
  const [receive, setReceive] = useState();
  const [selectedReceiveCountry, setSelectedReceiveCountry] = useState("ANG");

  const handleInput = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "") {
      setInput("");
      setReceive(0);
      return;
    }
    const numValue = Number(inputValue);
    const selectedCurrency = data.find(
      (item) => item.quote === selectedReceiveCountry,
    );
    console.log(selectedCurrency);

    if (!isNaN(numValue) && selectedCurrency) {
      setInput(numValue);
      setReceive(numValue * selectedCurrency.rate);
    }
  };

  useEffect(() => {
    const fetchRates = async () => {
      try {
        SetError(null);
        const data = await getData(baseCurrency);
        SetData(data);
        console.log(data[0]);
        console.log(selectedReceiveCountry);
      } catch (err) {
        SetError(err.message);
      }
    };
    fetchRates();
  }, [baseCurrency]);

  return (
    <div className="mt-12 max-w-5xl flex flex-col justify-start mx-auto ">
      <h1 className="leading-[1.2] tracking-[-0.5px]">CHECK THE RATE</h1>
      <div className="bg-[#202022] mt-4 h-40 flex gap-8.75 items-center p-5 rounded-t-[20px] border-b border-dashed border-white/10">
        <div className="bg-[#2E2E2E] h-28 w-112.5 rounded-2xl flex flex-col  p-5">
          <p className="uppercase text-[#C6C6C6] text-[14px]">Send</p>
          <div className="flex justify-between items-center">
            <input
              type="number"
              className="text-[40px] w-30 font-bold [appearance:textfield]
              [&::-webkit-inner-spin-button]:appearance-none
              [&::-webkit-outer-spin-button]:appearance-none"
              value={input}
              onChange={handleInput}
            />
            <div className="h-10 flex justify-center px-4 ">
              <select
                className="px-[11.5px] rounded-lg bg-[#3D3D3D] text-white"
                name="currency-select"
                id="currency-select"
                value={baseCurrency}
                onChange={(e) => SetBaseCurrency(e.target.value)}
              >
                <option value="">{baseCurrency}</option>
                {data.map((data) => (
                  <option key={data.quote} value={data.quote}>
                    {data.quote}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="bg-[#2E2E2E] w-12 h-12 flex mx-auto items-center">
          to
        </div>
        <div className="bg-[#2E2E2E] h-28 w-112.5 rounded-2xl flex flex-col  p-5">
          <p className="uppercase text-[#C6C6C6] text-[14px]">RECEIVE</p>
          <div className="flex justify-between items-center">
            <input
              type="number"
              className="text-[40px] w-30 font-bold [appearance:textfield]
              [&::-webkit-inner-spin-button]:appearance-none
              [&::-webkit-outer-spin-button]:appearance-none"
              value={receive}
            />
            <div className="h-10 flex justify-center px-4">
              <select
                className="px-[11.5px] rounded-lg bg-[#3D3D3D] text-white"
                name="currency-select"
                id="currency-select"
                onChange={(e) => setSelectedReceiveCountry(e.target.value)}
              >
                <option value="">{selectedReceiveCountry}</option>
                {data.map((data) => (
                  <option key={data.quote}>{data.quote}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#202022] rounded-b-[20px] flex justify-between px-5 py-6">
        <p className="text-[12px] ">1 USD = 0.8530 EUR</p>
        <div className="flex text-black gap-5 font-medium">
          <button className=" bg-[#CEF739] rounded-lg w-29.25 h-8">
            FAVORITED
          </button>
          <button
            className="border-[#CEF739] text-white border rounded-lg w-43 h-
          "
          >
            LOG CONVERSION
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConvertBox;
