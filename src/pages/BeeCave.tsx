import Calbar from "../components/Calbar";
import HubBar from "../components/HubBar";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import SessionBtn from "../components/SessionBtn";
import { useState } from "react";

const BeeCave = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <main className="flex min-h-dvh flex-col bg-cover bg-no-repeat text-foreground bg-[url('/images/iCode-BeeCave-bkgrd.jpg')]">
        <Navbar />
        <div className="bg-[#FE6602]">
          <Calbar />
        </div>
        <div className="flex flex-row flex-1">
          <HubBar />
          {Array.from({ length: 6 }, (_, index) => (
            <SessionBtn key={index} onOpenModal={openModal} />
          ))}
        </div>
      </main>

      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
};

export default BeeCave;
