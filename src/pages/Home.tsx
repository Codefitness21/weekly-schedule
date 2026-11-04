import Calbar from "../components/Calbar";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import HubBar from "../components/HubBar";
import SessionCard from "../components/SessionCard";
import { useEffect, useState } from "react";
import { supabase } from "../assets/supabase-client";
import type { Session } from "../types/session";
import DirectorRow from "../components/DirectorRow";

const getMondayOfCurrentWeek = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const mondayOffset = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
  const monday = new Date(today);

  monday.setDate(today.getDate() + mondayOffset);
  monday.setHours(0, 0, 0, 0);

  return monday;
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [weekStart, setWeekStart] = useState<Date>(getMondayOfCurrentWeek);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(1);
  const [selectedSession, setSelectedSession] = useState<Session | null>(null);

  const [sessions, setSessions] = useState<Session[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSessions = async () => {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("sessions")
        .select("*")
        .eq("location", "Austin");

      if (error) {
        console.error("Failed to fetch Austin sessions:", error);
        setIsLoading(false);
        return;
      }

      setSessions(data ?? []);
      setIsLoading(false);
    };

    fetchSessions();
  }, [weekStart]);

  const openModal = (date: string, slot: number) => {
    setSelectedDate(date);
    setSelectedSlot(slot);
    setSelectedSession(null);
    setIsModalOpen(true);
  };
  const editSession = (session: Session) => {
    setSelectedDate(session.session_date);
    setSelectedSlot(session.slot ?? 1);
    setSelectedSession(session);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const dates = Array.from({ length: 6 }, (_, index) => {
    const date = new Date(weekStart);
    date.setDate(date.getDate() + index);
    return date.toISOString().slice(0, 10);
  });

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
      <main className="flex min-h-dvh flex-col bg-cover bg-no-repeat text-foreground bg-[url('/images/iCode-Austin-bkgrd.jpg')]">
        <Navbar
          weekStart={weekStart}
          onWeekChange={shiftWeek}
          onDateChange={selectWeek}
        />
        <div className="bg-blue-500">
          <Calbar weekStart={weekStart} />
        </div>
        <DirectorRow />
        <div className="flex flex-row flex-1">
          <HubBar />
          {isLoading ? (
            <div className="flex flex-1 items-center justify-center bg-white/70">
              Loading sessions...
            </div>
          ) : (
            dates.map((date) => (
              <SessionCard
                key={date}
                date={date}
                sessions={sessions.filter(
                  (session) => session.session_date === date,
                )}
                onOpenModal={(slot) => openModal(date, slot)}
                onEditSession={editSession}
              />
            ))
          )}
        </div>
      </main>

      {isModalOpen && (
        <Modal
          date={selectedDate}
          location="Austin"
          slot={selectedSlot}
          session={selectedSession}
          onSaved={() => {
            setIsModalOpen(false);
            setWeekStart((current) => new Date(current));
          }}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Home;
