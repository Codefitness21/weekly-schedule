import Calbar from "./components/Calbar";
import Navbar from "./components/Navbar";
import HubBar from "./components/HubBar";

const schedule = () => {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <Calbar />
      <HubBar />
    </div>
  );
};

export default schedule;
