//This component points to the weekly dates that are represented on the blue and orange bar for South Austin and Bee Cave, respectively.
//The dates displayed here on the calendar bar are generated from WeeklyDateNav.

type CalbarProps = {
  weekStart: Date;
};

const Calbar = ({ weekStart }: CalbarProps) => {
  const dates = Array.from({ length: 6 }, (_, index) => {
    const date = new Date(weekStart);
    date.setDate(weekStart.getDate() + index);
    return `${date.getMonth() + 1}/${date.getDate()}`;
  });

  const dayNames = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

  return (
    <div className="grid h-16 grid-cols-[12vw_repeat(6,minmax(0,1fr))] items-center text-1xl text-zinc-100">
      <div />
      {dates.map((date, index) => (
        <div
          key={date}
          className="flex flex-col items-center justify-center text-center"
        >
          <span>{dayNames[index]}</span>
          <span>{date}</span>
        </div>
      ))}
    </div>
  );
};

export default Calbar;
