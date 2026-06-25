import { Link } from "react-router-dom";

const pages = [
  { name: "History", path: "/" },
  { name: "Compare", path: "/compare" },
  { name: "Favorites", path: "/favorites" },
  { name: "Log", path: "/log" },
];

const PagesHeader = () => {
  return (
    <div className="mt-8 max-w-5xl px-6 flex gap-3 border-b border-[#202022] mx-auto">
      {pages.map((page) => (
        <div key={page.path} className="px-1.5 py-2.5">
          <Link to={page.path}>{page.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default PagesHeader;
