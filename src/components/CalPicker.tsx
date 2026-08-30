//Components managed with useState.
//DatePicker is the calendar input component from the react-datepicker library.
//Imported "react-datepicker/dist/react-datepicker.css" for the calendar styling;
//calendar image located in the images folder under the public folder imports the calendar icon.

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "/images/calendar.png";

//startDate stores the currently selected date, initialized to today's date.
//The image is imported in this manner for build verification, image optimization, etc.
//This gives the build system more control and catches errors earlier. It can prevent the browser from showing outdated versions of files.

const CalPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex flex-row items-center bg-white">
      <img
        className="w-4 justify-center items-center ml-2"
        src={calendar}
        alt="iCode logo"
      />
      <DatePicker
        //tells CalPicker which date to display.
        selected={startDate}
        //runs when the user selects a date after clicking onChange. The newly selected date supplied by CalPicker. Then updates React state, causing the displayed date to update.
        onChange={(date: any) => setStartDate(date)}
        className="w-38 text-center cursor-pointer"
      />
    </div>
  );
};

export default CalPicker;
