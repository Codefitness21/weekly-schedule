import { NavLink } from "react-router-dom";

const Togglebar = () => {
  return (
    <div className="flex flex-row bg-white mb-2 w-fit">
      <NavLink to="/austin" className="bg-blue-500 text-white px-10">
        South Austin
      </NavLink>

      <NavLink to="/beecave" className="bg-[#FE6602] px-14">
        Bee Cave
      </NavLink>
    </div>
  );
};

export default Togglebar;
