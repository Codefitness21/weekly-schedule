import type { Session } from "../types/session";

type SessionCardProps = {
  date: string;
  sessions: Session[];
  onOpenModal: (slot: number) => void;
  onEditSession: (session: Session) => void;
};

const beltStyles: Record<string, string> = {
  "Stem Jr.": "bg-fuchsia-300 text-black",
  "Winter Foundation": "bg-sky-500 text-white",
  "Fall Foundation": "bg-sky-300 text-black",
  "Winter White Belt": "bg-white text-black",
  "Fall White Belt": "bg-white text-black",
  "Winter Gray Belt": "bg-gray-300 text-black",
  "Fall Gray Belt": "bg-gray-400 text-white",
  "Winter Orange Belt": "bg-orange-500 text-white",
  "Fall Orange Belt": "bg-orange-300 text-black",
  "Yellow Belt": "bg-yellow-300 text-black",
  "Green Belt": "bg-green-700 text-white",
  "Red Belt": "bg-red-700 text-white",
  "Blue Belt": "bg-blue-800 text-white",
  "Black Belt": "bg-black text-white",
  "AI Studio": "bg-purple-800 text-white",
};

const SessionCard = ({
  sessions,
  onOpenModal,
  onEditSession,
}: SessionCardProps) => {
  const boxes = Array.from({ length: 10 }, (_, index) => index + 1);
  const sessionsBySlot = new Map<number, Session>();
  sessions.forEach((session) => {
    if (session.slot !== null) sessionsBySlot.set(session.slot, session);
  });
  let nextAvailableSlot = 1;
  sessions.forEach((session) => {
    if (session.slot !== null) return;
    while (sessionsBySlot.has(nextAvailableSlot)) nextAvailableSlot++;
    if (nextAvailableSlot <= 10) {
      sessionsBySlot.set(nextAvailableSlot, session);
      nextAvailableSlot++;
    }
  });

  const formatTime = (time: string) => {
    const hour = Number(time.slice(0, 2));
    const minutes = time.slice(3, 5);
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  //removed ?? "bg-white text-black"
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      {boxes.map((box) => {
        const session = sessionsBySlot.get(box);
        const cardStyle = session ? beltStyles[session.belt ?? ""] : "";

        return (
          <div
            className="flex min-h-0 flex-1 items-center justify-center border-t border-dashed border-gray-400"
            key={box}
          >
            {session ? (
              <div
                className={`flex h-full w-50 min-w-0 flex-col overflow-hidden p-1 text-[0.65rem] border border-solid border-gray-300 ${cardStyle}`}
              >
                <div className="flex min-w-0 items-center font-bold border-b border-gray-200 px-1 gap-2">
                  {session.instructor}
                  {session.sub && <div className="text-[0.65rem]">(Sub)</div>}
                  <div className="font-normal">{session.hub}</div>
                  <div className="font-normal">{session.status}</div>
                  <div className="ml-3 font-normal italic"></div>
                  <button
                    type="button"
                    className="ml-auto shrink-0 cursor-pointer"
                    onClick={() => onEditSession(session)}
                    aria-label="Edit session"
                  >
                    <div>
                      <img
                        className="h-3 w-3"
                        src="public/images/edit.png"
                        alt="black pencil"
                      />
                    </div>
                  </button>
                </div>
                <div className="border-b border-gray-200 px-1">
                  {session.belt ?? session.camp}
                </div>
                <div className="border-b border-gray-200">
                  {formatTime(session.startTime)}-{formatTime(session.endTime)}
                </div>
                <div className="break-words text-[0.55rem]">
                  {session.notes}
                </div>
              </div>
            ) : (
              <button
                className="p-4 border-2 border-dashed border-gray-400 cursor-pointer"
                onClick={() => onOpenModal(box)}
              >
                + add session
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SessionCard;
