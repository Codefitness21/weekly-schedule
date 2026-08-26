import Calbar from "../components/Calbar";
import Navbar from "../components/Navbar";
import HubBar from "../components/HubBar";
import SessionBtn from "../components/SessionBtn";

const schedule = () => {
  return (
    <main className="flex min-h-dvh flex-col bg-cover bg-no-repeat text-foreground bg-[url('/images/iCode-Austin-bkgrd.jpg')]">
      <Navbar />
      <div className="bg-blue-500">
        <Calbar />
      </div>

      <div className="flex flex-row flex-1">
        <HubBar />
        {Array.from({ length: 6 }, (_, index) => (
          <SessionBtn key={index} />
        ))}
      </div>
    </main>
  );
};

export default schedule;
