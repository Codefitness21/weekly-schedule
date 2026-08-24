import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CalPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="bg-white">
      <DatePicker
        //tells CalPicker whicjh date to display.
        selected={startDate}
        //runs when the user selects a date after clicking onChange. The newly selected date supplied by CalPicker. Then updates React state, causing the displayed date to update.
        onChange={(date: any) => setStartDate(date)}
        className="text-center"
      />
    </div>
  );
};

export default CalPicker;
