const SessionBtn = () => {
  return (
    <div className="flex min-h-0 w-[80vw] flex-1 flex-col">
      {Array.from({ length: 5 }, (_, index) => (
        <div className="flex min-h-0 flex-1 items-center border-t border-dashed border-gray-400" key={index}>
          <button className="bg-white p-4 border-2 border-dashed border-gray-400">
            + add session
          </button>
        </div>
      ))}
    </div>
  );
};

export default SessionBtn;
