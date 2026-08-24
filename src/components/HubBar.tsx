const hubs = ["HUB 1", "HUB 2", "HUB 3", "HUB 4", "Make-ups/1:1"];
const hubStyles =
  "flex flex-1 min-h-0 w-[10vw] items-center justify-center bg-black border-t-1";

const HubBar = () => {
  return (
    <div className="flex min-h-0 flex-1 flex-col justify-center text-zinc-100 text-1xl">
      {hubs.map((hubs) => (
        <div className={hubStyles} key={hubs}>
          <h3>{hubs}</h3>
        </div>
      ))}
    </div>
  );
};

export default HubBar;
