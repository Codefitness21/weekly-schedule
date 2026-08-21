import logo from "/images/logo.png";

const Navbar = () => {
  return (
    <div className="flex h-20 flex-row items-center gap-4 bg-black">
      <div className="w-16">
        <img src={logo} alt="iCode logo" />
      </div>
      <div className="flex text-zinc-100 text-2xl">
        <h3>Weekly Belt Schedule</h3>
      </div>
    </div>
  );
};

export default Navbar;
