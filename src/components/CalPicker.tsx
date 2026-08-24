import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "/images/calendar.png";

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
        //tells CalPicker whicjh date to display.
        selected={startDate}
        //runs when the user selects a date after clicking onChange. The newly selected date supplied by CalPicker. Then updates React state, causing the displayed date to update.
        onChange={(date: any) => setStartDate(date)}
        className="w-38 text-center cursor-pointer"
      />
    </div>
  );
};

export default CalPicker;
