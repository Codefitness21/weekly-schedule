import WeeklyDateNav from "./WeeklyDateNav";
import Togglebar from "./Togglebar";
import logo from "/images/logo.png";
import CalPicker from "./CalPicker";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

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

type NavbarProps = {
  weekStart: Date;
  onWeekChange: (direction: number) => void;
  onDateChange: (date: Date) => void;
};

const Navbar = ({ weekStart, onWeekChange, onDateChange }: NavbarProps) => {
  // const [category, setCategory] = useState("");

  return (
    <div className="flex lg:w-full flex-col gap-4 bg-black p-4 lg:h-20 lg:flex-row lg:justify-between lg:items-center lg:p-8">
      <div className="flex flex-row items-center">
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
        <div className="flex text-zinc-100 text-1xl">
          Weekly Belt Session Schedule
        </div>
      </div>

      <div className="flex w-full items-center lg:flex-col flex-col lg:w-auto">
        <div className="lg:mr-10">
          <Togglebar />
        </div>
        <div className="flex flex-row gap-4 lg:flex-row lg:items-center lg:mr-10">
          <div>
            <WeeklyDateNav weekStart={weekStart} onWeekChange={onWeekChange} />
          </div>

          <div className="w-40">
            <CalPicker weekStart={weekStart} onDateChange={onDateChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
