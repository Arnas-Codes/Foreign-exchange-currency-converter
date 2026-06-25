import mockMarkets from "./Data";


const SubNavbar = () => {
  return (
    <div className="bg-[#2E2E2E] h-10">
      <div className="max-w-7xl mx-auto h-full flex items-center">
        <div className="bg-[#CEF739] text-black h-full px-4 flex items-center font-semibold whitespace-nowrap shrink-0">
          <span className="w-2 h-2 rounded-full bg-black mr-2"></span>
          Live Markets
        </div>
        <div className="flex gap-3">
          {mockMarkets.map((data) => (
            <div
              className="flex gap-2 border-r h-10 px-2 items-center"
              key={data.id}
            >
              <p>{data.pair}</p>
              <p>{data.rate}</p>
              <p
                className={`${data.isUp ? "text-[#42EB05]" : "text-[#FF4141]"}`}
              >
                {data.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubNavbar;
