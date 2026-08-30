//HubBar component points to the Hubs located to the left of the site. There are 4 and then an extra section for makeups and private lessons, which are then assigned a hub.
//hub variable created for the different Hubs so I can map through them with the styling as opposed to having the styling repeat.
//hubStyles are a string of styles that are applied to each Hub during mapping.
//key needed to help React identify which hub items have been changed.

const hubs = ["HUB 1", "HUB 2", "HUB 3", "HUB 4", "Make-ups/Private"];
const hubStyles =
  "flex flex-1 min-h-0 w-[10vw] items-center justify-center bg-black border-t-1";

const HubBar = () => {
  return (
    <div className="flex min-h-0 flex-col justify-center text-zinc-100 text-1xl">
      {hubs.map((hubs) => (
        <div className={hubStyles} key={hubs}>
          <h3>{hubs}</h3>
        </div>
      ))}
    </div>
  );
};

export default HubBar;
