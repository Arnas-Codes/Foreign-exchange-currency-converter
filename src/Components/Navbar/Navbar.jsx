import Icon from "../../assets/Navbar/Icon.png";

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-neutral-800">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={Icon} alt="FX Checker Logo" className="w-5 h-5" />

          <h1 className="font-mono font-bold tracking-wider text-white">
            FX_CHECKER
          </h1>
        </div>

        <p className="hidden sm:block font-mono text-xs tracking-widest text-neutral-400">
          55 CURRENCIES · EOD · ECB DATA
        </p>
      </div>
    </nav>
  );
};

export default Navbar;