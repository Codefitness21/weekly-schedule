import Datebar from "./Datebar";
import Togglebar from "./Togglebar";
import logo from "/images/logo.png";
import CalPicker from "./CalPicker";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex h-20 flex-row items-center gap-4 bg-black p-8 cursor-pointer">
      <div className="w-16">
        <NavLink to="/">
          <img src={logo} alt="iCode logo" />
        </NavLink>
      </div>
      <div className="flex text-zinc-100 text-2xl">
        <h3>Weekly Belt Schedule</h3>
      </div>
      <div className="flex flex-col ml-auto">
        <Togglebar />
        <div className="flex flex-row items-center gap-4">
          <Datebar />
          <CalPicker />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
