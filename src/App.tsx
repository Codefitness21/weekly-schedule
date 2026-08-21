import Calbar from "./components/Calbar";
import Navbar from "./components/Navbar";
import HubBar from "./components/HubBar";

const schedule = () => {
  return (
    <main className="flex min-h-dvh flex-col bg-cover bg-no-repeat text-foreground bg-[url('/images/iCode-Austin-bkgrd.jpg')]">
      <Navbar />
      <Calbar />
      <HubBar />
    </main>
  );
};

export default schedule;
