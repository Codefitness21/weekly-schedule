import WeeklyDateNav from "./WeeklyDateNav";
import Togglebar from "./Togglebar";
import logo from "/images/logo.png";
import CalPicker from "./CalPicker";
import { NavLink } from "react-router-dom";
import { useState } from "react";

//Logo is in the NavBar component.
//NavLink is a component from react-router-dom.
//Navigates to home home page when logo is clicked.

//className accepts a function that receives an object containing an isActive property.
//isActive is a boolean that tells whether the current link is active.
//Destructuring is used to get the isActive value from that object.
//Use a ternary operator: if isActive is true, set bg-blue-500 and text-white; otherwise, set bg-white and text-black.

//Set the category to be used by the value.
//When clicked, triggers the onChange event to fire.
//We get the selected value from e.targe.value and pass it to setCategory, which updates the category.
//The component re-renders with the new value.

const Navbar = () => {
  const [category, setCategory] = useState("");
  return (
    <div className="flex h-20 flex-row items-center gap-4 bg-black p-8 cursor-pointer">
      <div className="w-16">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "bg-blue-500 text-white" : "bg-white text-black"}`
          }
        >
          <img src={logo} alt="iCode logo" />
        </NavLink>
      </div>
      <div className="flex text-zinc-100 text-2xl">
        <select
          className="cursor-pointer p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Weekly Belt Session Schedule">
            Weekly Belt Session Schedule
          </option>
          <option value="Thanksgiving Camp Schedule">
            Thanksgiving Camp Schedule
          </option>
          <option value="Winter Break Camp Schedule">
            Winter Break Camp Schedule
          </option>
          <option value="Spring Break Camp Schedule">
            Spring Break Camp Schedule
          </option>
          <option value="Summer Camp Schedule">Summer Camp Schedule</option>
        </select>
      </div>
      <div className="flex flex-col ml-auto">
        <Togglebar />
        <div className="flex flex-row items-center gap-4">
          <WeeklyDateNav />
          <CalPicker />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
