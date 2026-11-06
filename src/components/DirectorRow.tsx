import { useState } from "react";

const DirectorRow = () => {
  const [director, setDirector] = useState("");
  const directors = Array.from({ length: 6 }, (_, index) => index + 1);

  return (
    <div className="bg-white">
      <div className="grid grid-cols-[15vw_repeat(6,minmax(0,1fr))] items-center text-1xl text-black-100">
        <div />
        {directors.map((_, index) => (
          <div
            key={index}
            className="flex lg:flex-col flex-col lg:items-center lg:justify-center cursor-pointer font-medium"
          >
            Director on-site
            <select
              className="cursor-pointer p-2"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
              name="Director on-site"
            >
              <option value="John">John</option>
              <option value="Jeff">Jeff</option>
              <option value="Tash">Tash</option>
              <option value="John/Tash">John/Tash</option>
              <option value="John/Tash">Jeff/Tash</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DirectorRow;
