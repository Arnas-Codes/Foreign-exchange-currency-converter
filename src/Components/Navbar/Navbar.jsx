import React from "react";
import Icon from "../../assets/Navbar/Icon.png";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center p-4 max-w-7xl h-16 mx-auto">
      <div className="flex items-center gap-2">
        <img src={Icon} alt="" />
        <h1 className="font-bold">FX_CHECKER</h1>
      </div>
      <h2 className="leading-tight text-sm text-neutral-200">55 CURRENCIES · EOD · ECB DATA</h2>
    </div>
  );
};

export default Navbar;
