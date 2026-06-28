import Navbar from "./Components/Navbar/Navbar";
import SubNavbar from "./Components/SubNavbar/SubNavbar";
import ConvertBox from "./Components/ConversionBox/ConvertBox";
import PagesHeader from "./Pages/PagesHeader/PagesHeader";
import History from "./Pages/HistoryPage/History";
import Compare from "./Pages/ComparePage/Compare";
import Favorites from "./Pages/FavoritePage/Favorites";

import { Routes, Route } from "react-router-dom";
import { FavoriteData } from "./Pages/FavoritePage/FavoriteData";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <SubNavbar />
      <ConvertBox />
      <div>
        <PagesHeader />

        <Routes>
          <Route path="/" element={<History />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
