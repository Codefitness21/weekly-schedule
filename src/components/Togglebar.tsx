import { NavLink, useLocation } from "react-router-dom";

const Togglebar = () => {
  const { pathname } = useLocation();
  const isAustin = pathname === "/" || pathname === "/austin";

  return (
    <div className="flex flex-row mb-2 w-fit">
      <NavLink
        to="/austin"
        className={({ isActive }) =>
          `px-10 ${isAustin || isActive ? "bg-blue-500 text-white" : "bg-white text-black"}`
        }
      >
        South Austin
      </NavLink>

      <NavLink
        to="/beecave"
        className={({ isActive }) =>
          `px-14 ${!isActive ? "bg-white" : "bg-[#FE6602]"}`
        }
      >
        Bee Cave
      </NavLink>
    </div>
  );
};

export default Togglebar;
