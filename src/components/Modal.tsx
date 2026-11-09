import { useState } from "react";
import { supabase } from "../assets/supabase-client.ts";
import type { Session } from "../types/session";

type ModalProps = {
  date: string;
  location: string;
  slot: number;
  session?: Session | null;
  onSaved: () => void;
  onClose: () => void;
};

//Single piece of state called Form Data to replace the individual states for every field.
//Objects representing each input. One piece of state which is an object.

//Map through tailwind???

const Modal = ({
  date,
  location,
  slot,
  session,
  onSaved,
  onClose,
}: ModalProps) => {
  const [formData, setFormData] = useState({
    repeatWeekly: false,
    instructor: session?.instructor ?? "",
    sub: session?.sub ?? false,
    status: session?.status ?? "",
    hub: session?.hub ?? "",
    startTime: session?.startTime ?? "",
    endTime: session?.endTime ?? "",
    belt: session?.belt ?? "",
    camp: session?.camp ?? "",
    notes: session?.notes ?? "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const sessionDetails = {
      instructor: formData.instructor,
      sub: formData.sub,
      status: formData.status,
      hub: formData.hub,
      startTime: formData.startTime,
      endTime: formData.endTime,
      belt: formData.belt,
      camp: formData.camp,
      notes: formData.notes,
    };

    const rows = [];
    const weeks = formData.repeatWeekly ? 40 : 1;

    for (let i = 0; i < weeks; i++) {
      const dates = new Date(date);
      dates.setDate(dates.getDate() + i * 7);

      rows.push({
        ...sessionDetails,
        session_date: dates.toISOString().slice(0, 10),
        location,
        slot,
      });
    }

    const { error } = session
      ? await supabase
          .from("sessions")
          .update(sessionDetails)
          .eq("id", session.id)
      : await supabase.from("sessions").insert(rows);

    if (error) {
      console.error(error);
      alert("Unable to save session.");
      return;
    }

    onSaved();
  };

  const handleDelete = async () => {
    if (!session) return;

    const confirmed = window.confirm(
      "Delete this session? This cannot be undone.",
    );
    if (!confirmed) return;

    const { data, error } = await supabase
      .from("sessions")
      .delete()
      .eq("id", session.id)
      .select("id")
      .maybeSingle();

    if (error) {
      console.error("Failed to delete session:", error);
      alert("Unable to delete session.");
      return;
    }

    if (!data) {
      alert("No session was deleted. It may already have been removed.");
      return;
    }

    onSaved();
  };

  //handleChange takes the place of e.target.value
  //Change out state by setting setFormData.
  //Setting the formData to the data that's in the form. Spread across form data.
  //Using the name as propety name so [] were used.
  //The name attribute tells the function which property to in formData to update.
  //Name is set to whatever the value is.

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="fixed top-0 right-0 w-full h-full bg-black/70 flex lg:flex-row lg:justify-center justify-center items-center lg:items-center">
      <div className="bg-white p-20 lg:w-200 lg:h-150 w-100">
        <form
          onSubmit={handleSubmit}
          className="flex lg:flex-col flex-col gap-4"
        >
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div>
              <div className="flex lg:flex-row lg:justify-between gap-2">
                <label
                  htmlFor="instructor"
                  className="flex lg:flex-row lg:justify-between font-bold"
                >
                  Instructors
                </label>

                <label
                  htmlFor="sub"
                  className="flex lg:flex-row lg:items-end items-end text-sm font-normal lg:gap-2"
                >
                  <input
                    name="sub"
                    type="checkbox"
                    checked={formData.sub}
                    onChange={handleChange}
                    className="mb-1 cursor-pointer gap-2"
                  ></input>
                  Sub
                </label>
              </div>
              <select
                name="instructor"
                className="cursor-pointer w-35 p-2 border rounded-none"
                value={formData.instructor}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Kelly">Kelly</option>
                <option value="Donta">Donta</option>
                <option value="John">John</option>
                <option value="Kalina">Kalina</option>
                <option value="Mya">Mya</option>
                <option value="Roberto">Roberto</option>
                <option value="Gio">Gio</option>
                <option value="Jeff">Jeff</option>
              </select>
            </div>

            <div>
              <label htmlFor="status" className="block font semibold font-bold">
                Class Status
              </label>
              <select
                name="status"
                className="cursor-pointer w-40 p-2 border rounded-none"
                value={formData.status}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Paused">Paused</option>
                <option value="Cancelled">Cancelled</option>
                <option value="Rescheduled">Rescheduled</option>
                <option value="Makeup">Makeup</option>
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
                <option value=""></option>
                <option value="HUB-1">HUB-1</option>
                <option value="HUB-2">HUB-2</option>
                <option value="HUB-3">HUB-3</option>
                <option value="HUB-4">HUB-4</option>
              </select>
            </div>
          </div>
          <div className="flex lg:flex-row lg:justify-between flex-col">
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
                <option value=""></option>
                <option value="Stem Jr.">Stem Jr.</option>
                <option value="Winter Foundation">Winter Foundation</option>
                <option value="Fall Foundation">Fall Foundation</option>
                <option value="Winter White Belt">Winter White Belt</option>
                <option value="Fall White Belt">Fall White Belt</option>
                <option value="Winter Gray Belt">Winter Gray Belt</option>
                <option value="Fall Gray Belt">Fall Gray Belt</option>
                <option value="Winter Orange Belt">Winter Orange Belt</option>
                <option value="Fall Orange Belt">Fall Orange Belt</option>
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
                <option value=""></option>
                <option value="VEX">Game Builder</option>
                <option value="Minecraft">Minecraft: Modding Adventure</option>
                <option value="YouTube">Roblox Editor</option>
                <option value="YouTube">YouTube Creator</option>
              </select>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col gap-7">
            <div>
              <label
                htmlFor="startTime"
                className="block font semibold font-bold"
              >
                Start Time
              </label>
              <input
                className="border-1 p-2"
                type="time"
                id="startTime"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                min="0:00"
                max="23:59"
                required
              />
            </div>

            <div>
              <label
                htmlFor="endTime"
                className="block font semibold font-bold"
              >
                End Time
              </label>
              <input
                className="border-1 p-2"
                type="time"
                id="endTime"
                name="endTime"
                value={formData.endTime}
                onChange={handleChange}
                min="0:00"
                max="23:59"
                required
              />
            </div>
            <div className="flex lg:flex-row text-sm">
              <label className="flex lg:flex-row lg:self-center gap-2 lg:ml-15">
                <input
                  type="checkbox"
                  name="repeatWeekly"
                  checked={formData.repeatWeekly}
                  onChange={handleChange}
                />
                Repeat Weekly
              </label>
            </div>
          </div>

          <div className="flex lg:flex-row">
            <div>
              <label
                htmlFor="description"
                className="block font semibold font-bold"
              >
                *Notes*
              </label>
              <textarea
                name="notes"
                maxLength={200}
                wrap="soft"
                className="lg:w-160 w-70 resize-none whitespace-normal p-2 border rounded-none"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <div className="flex lg:flex-row lg:justify-between">
            <div className="flex lg:flex-row flex-row mr-8">
              <button
                type="button"
                onClick={handleDelete}
                className="border border-black rounded-none bg-red-500 text-white py-0.5 px-3.5 cursor-pointer"
              >
                Delete
              </button>
            </div>

            <div className="flex lg:flex-row lg:items-right lg:justify-center">
              <button
                type="button"
                className="border rounded-none py-0.5 px-3 cursor-pointer mr-8"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="border border-black rounded-none bg-blue-500 text-white py-0.5 px-3 cursor-pointer"
              >
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
