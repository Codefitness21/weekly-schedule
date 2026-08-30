//The WeeklyDateNav component located in the nav bar selects the weekly dates, which not only appear in the date input field but also on the calendar bar (Calbar).
//The span tag was used for the navigation buttons and the date input field because they're small pieces of content that are on the same line.
//The span tag is an inline element used because it doesn't create line breaks and takes up as much width as necessary.
//Left and right margins are respected.
//An @layer components base styling was created globally in the index.css file for the date input field and the nav btns using the nav-label className. They share the same properties.

const WeeklyDateNav = () => {
  return (
    <div className="nav-level flex flex-row">
      <span className="nav-label mr-2">Prev</span>
      <span className="nav-label">Date range</span>
      <span className="nav-label ml-2">Next</span>
    </div>
  );
};

export default WeeklyDateNav;
