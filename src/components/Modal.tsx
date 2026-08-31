import { useState } from "react";

//Single piece of state called Form Data to replace the individual states for every field.
//Objects representing each input. One piece of state which is an object.

const Modal = () => {
  const [formData, setFormData] = useState({
    instructor: "Select Instructor",
    subChecked: false,
    status: "None",
    hub: "None",
    belt: "Select Belt Class",
    camp: "Select Belt Camp",
    startTime: "",
    endTime: "",
    note: "",
  });

  //handleChange takes the place of e.target.value
  //Change out state by setting setFormData.
  //This needs to be immutable.
  //Setting the formData to the data that's in the form. Spread across form data.
  //Using the name as propety name so [] were used.
  //Name is set to whatever the value is.

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black/70 flex flex-row justify-center items-center ">
      <div className="bg-white p-20 w-200 h-150">
        <div className="text-3xl font-bold mb-4">
          <h1>Edit Session</h1>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-row justify-between">
            <div>
              <div className="flex flex-row justify-between">
                <label
                  htmlFor="instructor"
                  className="flex flex-row justify-between font-bold"
                >
                  Instructor
                </label>

                <label
                  htmlFor="sub"
                  className="flex flex-row items-end text-sm font-normal gap-2"
                >
                  <input
                    name="subChecked"
                    type="checkbox"
                    checked={formData.subChecked}
                    onChange={handleChange}
                    className="mb-1 cursor-pointer"
                  ></input>
                  Sub
                </label>
              </div>
              <select
                name="instructor"
                className="cursor-pointer w-70 p-2 border rounded-none"
                value={formData.instructor}
                onChange={handleChange}
              >
                <option value="Select Instructor">(Select Instructor)</option>
                <option value="Kelly">Kelly</option>
                <option value="Donta">Donta</option>
                <option value="John">John</option>
                <option value="Kalina">Kalina</option>
                <option value="Mya">Mya</option>
                <option value="Michael">Michael</option>
                <option value="Sonu">Sonu</option>
                <option value="Jeff">Jeff</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block font semibold font-bold">
                Class Status
              </label>
              <select
                name="status"
                className="cursor-pointer w-25 p-2 border rounded-none"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="None">None</option>
                <option value="Paused">Paused</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Rescheduled">Rescheduled</option>
                <option value="Make-up">Make-up</option>
                <option value="Private">Private</option>
              </select>
            </div>
            <div>
              <label htmlFor="title" className="block font semibold font-bold">
                Hub
              </label>
              <select
                name="hub"
                className="cursor-pointer w-25 p-2 border rounded-none"
                value={formData.hub}
                onChange={handleChange}
              >
                <option value="None">None</option>
                <option value="One">1</option>
                <option value="Two">2</option>
                <option value="Three">3</option>
                <option value="Four">4</option>
              </select>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <label htmlFor="belt" className="block font semibold font-bold">
                Belt Classes
              </label>
              <select
                name="belt"
                className="cursor-pointer w-70 p-2 border rounded-none"
                value={formData.belt}
                onChange={handleChange}
              >
                <option value="Select Belt">(Select Belt)</option>
                <option value="Stem Jr.">Stem Jr.</option>
                <option value="Foundation">Foundation</option>
                <option value="White Belt">White Belt</option>
                <option value="Gray Belt">Gray Belt</option>
                <option value="Orange Belt">Orange Belt</option>
                <option value="Yellow Belt">Yellow Belt</option>
                <option value="Green Belt">Green Belt</option>
                <option value="Red Belt">Red Belt</option>
                <option value="Blue Belt">Blue Belt</option>
                <option value="Black Belt">Black Belt</option>
                <option value="AI Studio">AI Studio</option>
              </select>
            </div>
            <div>
              <label htmlFor="camp" className="block font semibold font-bold">
                Camp Classes
              </label>
              <select
                name="camp"
                className="cursor-pointer w-70 p-2 border rounded-none"
                value={formData.camp}
                onChange={handleChange}
              >
                <option value="Select Camp">(Select Camp)</option>
                <option value="Minecraft">Minecraft</option>
                <option value="YouTube">YouTube</option>
                <option value="VEX">VEX</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div>
              <label
                htmlFor="startTime"
                className="block font semibold font-bold"
              >
                Start Time
              </label>
              <select
                name="startTime"
                className="cursor-pointer w-70 p-2 border rounded-none"
                value={formData.startTime}
                onChange={handleChange}
              ></select>
            </div>
            <div>
              <label
                htmlFor="endTime"
                className="block font semibold font-bold"
              >
                End Time
              </label>
              <select
                name="endTime"
                className="cursor-pointer w-70 p-2 border rounded-none"
                value={formData.endTime}
                onChange={handleChange}
              ></select>
            </div>
          </div>

          <div className="flex flex-row ">
            <div>
              <label
                htmlFor="description"
                className="block font semibold font-bold"
              >
                *Notes*
              </label>
              <textarea
                name="note"
                className="cursor-pointer w-160 p-2 border rounded-none"
                value={formData.note}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row">
              <button className="border border-black rounded-none bg-red-500 text-white py-0.5 px-3.5 cursor-pointer">
                Delete
              </button>
            </div>

            <div className="flex flex-row items-right justify-center">
              <button className="border rounded-none py-0.5 px-3 cursor-pointer mr-4">
                Cancel
              </button>
              <button className="border border-black rounded-none bg-blue-500 text-white py-0.5 px-3 cursor-pointer">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
