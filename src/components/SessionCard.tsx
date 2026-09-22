import type { Session } from "../types/session";

type SessionCardProps = {
  date: string;
  sessions: Session[];
  onOpenModal: () => void;
  onEditSession: (session: Session) => void;
};

const beltStyles: Record<string, string> = {
  "Stem Jr.": "bg-fuchsia-300 text-black",
  Foundation: "bg-sky-300 text-black",
  "White Belt": "bg-white text-black",
  "Gray Belt": "bg-gray-400 text-black",
  "Orange Belt": "bg-orange-300 text-black",
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
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      {boxes.map((box) => {
        const session = sessions[box - 1];
        const cardStyle = session
          ? (beltStyles[session.belt ?? ""] ?? "bg-white text-black")
          : "";

        return (
          <div
            className="flex min-h-0 flex-1 items-center justify-center border-t border-dashed border-gray-400"
            key={box}
          >
            {session ? (
              <div
                className={`flex h-full w-50 min-w-0 flex-col overflow-hidden p-1 text-xs border border-solid border-gray-300 ${cardStyle}`}
              >
                <div className="flex min-w-0 items-center font-bold border-b border-gray-200 px-1">
                  {session.instructor}
                  {session.sub && <div className="text-xs">-Sub</div>}
                  <div className="ml-3 font-normal italic">
                    {session.backUp}
                  </div>
                  <button
                    type="button"
                    className="ml-auto shrink-0 cursor-pointer"
                    onClick={() => onEditSession(session)}
                    aria-label="Edit session"
                  >
                    <img className="h-3 w-3" src="/images/edit.png" alt="" />
                  </button>
                </div>
                <div className="border-b border-gray-200 px-1">
                  {session.belt ?? session.camp}
                </div>
                <div>
                  {session.startTime} {session.endTime}
                </div>
                <div className="flex flex-row border-b border-gray-200 px-1 gap-2">
                  <div className="font-normal">{session.hub}</div>
                  <div className="font-normal">{session.status}</div>
                </div>
                <div className="break-words">{session.notes}</div>
              </div>
            ) : (
              <button
                className="bg-white p-4 border-2 border-dashed border-gray-400 cursor-pointer"
                onClick={onOpenModal}
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
