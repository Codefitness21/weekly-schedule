//The WeeklyDateNav component located in the nav bar selects the weekly dates, which not only appear in the date input field but also on the calendar bar (Calbar).
//The span tag was used for the navigation buttons and the date input field because they're small pieces of content that are on the same line.
//The span tag is an inline element used because it doesn't create line breaks and takes up as much width as necessary.
//Left and right margins are respected.
//An @layer components base styling was created globally in the index.css file for the date input field and the nav btns using the nav-label className. They share the same properties.

type WeeklyDateNavProps = {
  weekStart: Date;
  onWeekChange: (direction: number) => void;
};

const WeeklyDateNav = ({ weekStart, onWeekChange }: WeeklyDateNavProps) => {
  const formatDate = (date: Date) => `${date.getMonth() + 1}/${date.getDate()}`;

  const monday = new Date(weekStart);
  const saturday = new Date(weekStart);
  saturday.setDate(monday.getDate() + 5);

  return (
    <div className="nav-level flex flex-row items-center">
      <button
        type="button"
        className="nav-label mr-2 cursor-pointer"
        onClick={() => onWeekChange(-1)}
      >
        Prev
      </button>
      <span className="nav-label mx-2">
        {formatDate(monday)} - {formatDate(saturday)}
      </span>
      <button
        type="button"
        className="nav-label ml-2 cursor-pointer"
        onClick={() => onWeekChange(1)}
      >
        Next
      </button>
    </div>
  );
};

export default WeeklyDateNav;
