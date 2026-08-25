const SessionBtn = () => {
  const boxes = Array.from({ length: 5 }, (_, index) => index + 1);
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {boxes.map((boxes) => (
        <div
          className="flex flex-1 items-center justify-center border-t border-dashed border-gray-400"
          key={boxes}
        >
          <button className="bg-white p-4 border-2 border-dashed border-gray-400 cursor-pointer">
            + add session
          </button>
        </div>
      ))}
    </div>
  );
};

export default SessionBtn;
