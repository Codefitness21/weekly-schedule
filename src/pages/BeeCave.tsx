import Calbar from "../components/Calbar";
import HubBar from "../components/HubBar";
import Navbar from "../components/Navbar";
import SessionBtn from "../components/SessionBtn";

//This creates six session btn components in a loop for the Bee Cave page.
//Creates an array with 6 items and maps over them.
//The Array.from() converts the length into an actual array and runs the callback function for each item.
//That callback function is (_, index) => (), which runs 6 times. I'm not interested in the first parameter, hence the underscore. I just care about the index.

const BeeCave = () => {
  return (
    <main className="flex min-h-dvh flex-col bg-cover bg-no-repeat text-foreground bg-[url('/images/iCode-BeeCave-bkgrd.jpg')]">
      <Navbar />
      <div className="bg-[#FE6602]">
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
