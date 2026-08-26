import Calbar from "../components/Calbar";
import HubBar from "../components/HubBar";
import Navbar from "../components/Navbar";
import SessionBtn from "../components/SessionBtn";

const BeeCave = () => {
  return (
    <main className="flex min-h-dvh flex-col bg-cover bg-no-repeat text-foreground bg-[url('/images/iCode-BeeCave-bkgrd.jpg')]">
      <Navbar />
      <div className="bg-[#FF9E42]">
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

export default BeeCave;
