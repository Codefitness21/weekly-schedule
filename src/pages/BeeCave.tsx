import Calbar from "../components/Calbar";
import HubBar from "../components/HubBar";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import SessionCard from "../components/SessionCard";
import { useState } from "react";

const getMondayOfCurrentWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(today);

  monday.setDate(today.getDate() + mondayOffset);
  monday.setHours(0, 0, 0, 0);

  return monday;
};

const BeeCave = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weekStart, setWeekStart] = useState<Date>(getMondayOfCurrentWeek);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const shiftWeek = (direction: number) => {
    setWeekStart((current) => {
      const nextWeek = new Date(current);
      nextWeek.setDate(nextWeek.getDate() + direction * 7);
      return nextWeek;
    });
  };

  const selectWeek = (date: Date) => {
    const dayOfWeek = date.getDay();
    const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    const monday = new Date(date);
    monday.setDate(date.getDate() + mondayOffset);
    monday.setHours(0, 0, 0, 0);
    setWeekStart(monday);
  };

  return (
    <>
      <main className="flex min-h-dvh flex-col bg-cover bg-no-repeat text-foreground bg-[url(./images/Bee_Cave.jpg)]">
        <Navbar
          weekStart={weekStart}
          onWeekChange={shiftWeek}
          onDateChange={selectWeek}
        />
        <div className="bg-[#FE6602]">
          <Calbar weekStart={weekStart} />
        </div>
        <div className="flex flex-row flex-1">
          <HubBar />
          {Array.from({ length: 6 }, (_, index) => (
            <SessionCard key={index} onOpenModal={openModal} />
          ))}
        </div>
      </main>

      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default BeeCave;
