import { useState } from "react";

const Modal = () => {
  const [category, setCategory] = useState("");

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black/70 flex flex-row justify-center items-center">
      <div className="bg-white p-20 w-200 h-150">
        <form className="mb-6">
          <div className="flex flex-row justify-between">
            <div className="mb-4">
              <label htmlFor="title" className="block font semibold font-bold">
                Belt Classes
              </label>
              <select
                className="cursor-pointer w-70 p-2 border rounded-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
            <div className="mb-4">
              <label htmlFor="title" className="block font semibold font-bold">
                Camp Classes
              </label>
              <select
                className="cursor-pointer w-70 p-2 border rounded-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Select Camp">(Select Camp)</option>
                <option value="Minecraft">Minecraft</option>
                <option value="YouTube">YouTube</option>
                <option value="VEX">VEX</option>
              </select>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="mb-4">
              <label htmlFor="title" className="block font semibold font-bold">
                Start Time
              </label>
              <select
                className="cursor-pointer w-70 p-2 border rounded-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></select>
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block font semibold font-bold">
                End Time
              </label>
              <select
                className="cursor-pointer w-70 p-2 border rounded-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></select>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="mb-4">
              <label htmlFor="title" className="block font semibold font-bold">
                Instructor
              </label>

              <select
                className="cursor-pointer w-50 p-2 border rounded-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
            <div className="mb-4">
              <label htmlFor="title" className="block font semibold font-bold">
                Class Status
              </label>
              <select
                className="cursor-pointer w-50 p-2 border rounded-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="None">None</option>
                <option value="Paused">Paused</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Rescheduled">Rescheduled</option>
                <option value="Make-up">Make-up</option>
                <option value="1:1">1:1</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="title" className="block font semibold font-bold">
                Hub
              </label>
              <select
                className="cursor-pointer w-25 p-2 border rounded-none"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="None">None</option>
                <option value="One">1</option>
                <option value="Two">2</option>
                <option value="Three">3</option>
                <option value="Four">4</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
