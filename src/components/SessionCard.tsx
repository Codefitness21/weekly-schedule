import type { Session } from "../types/session";

type SessionCardProps = {
  date: string;
  sessions: Session[];
  onOpenModal: () => void;
};

const beltStyles: Record<string, string> = {
  "Stem Jr.": "bg-fuchsia-300 text-black",
  Foundation: "bg-sky-300 text-black",
  White: "bg-white text-black",
  Gray: "bg-gray-400 text-black",
  Orange: "bg-orange-300 text-black",
  Yellow: "bg-yellow-300 text-black",
  Green: "bg-green-700 text-white",
  Red: "bg-red-700 text-white",
  Blue: "bg-blue-500 text-white",
  Black: "bg-black text-white",
  AiStudio: "bg-purple-300 text-black",
};

const SessionCard = ({ sessions, onOpenModal }: SessionCardProps) => {
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
            className="flex flex-1 items-center justify-center border-t border-dashed border-gray-400"
            key={box}
          >
            {session ? (
              <div
                className={`flex w-45 min-w-0 flex-col break-words p-1 text-xs border border-solid border-gray-300 ${cardStyle}`}
              >
                <div className="flex flex-wrap font-bold border-b border-gray-200 px-1">
                  {session.instructor}
                  {session.sub && <div className="text-xs">-Sub</div>}
                  <div className="ml-3 font-normal italic">
                    Backup:&nbsp;
                    {session.backUp}
                  </div>
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
