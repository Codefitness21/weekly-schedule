// import { useEffect, useState } from "react";
// import { supabase } from "../assets/supabase-client";

// type SessionBtnProps = {
//   onOpenModal: () => void;
// };

// type Session = {
//   id: number;
//   instructor: string;
//   backUp: string;
//   belt: string;
//   startTime: string;
//   endTime: string;
// };

// const SessionBtn = ({ onOpenModal }: SessionBtnProps) => {
//   const [sessions, setSessions] = useState<Session[]>([]);

//   useEffect(() => {
//     const loadSessions = async () => {
//       const { data, error } = await supabase
//         .from("sessions")
//         .select("*")
//         .order("id", { ascending: true });

//       if (error) {
//         console.error("Loading sessions failed:", error);
//         return;
//       }

//       console.log("Sessions loaded:", data);
//       setSessions(data ?? []);
//     };

//     loadSessions();

//     const interval = setInterval(loadSessions, 2000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex min-h-0 flex-1 flex-col">
//       {Array.from({ length: 10 }, (_, index) => {
//         const session = sessions[index];

//         return (
//           <div
//             key={index}
//             className="flex flex-1 items-center justify-center border-t border-dashed border-gray-400"
//           >
//             {session ? (
//               <div className="text-center">
//                 <p>{session.instructor}</p>
//                 <p>{session.belt}</p>
//                 <p>
//                   {session.startTime} - {session.endTime}
//                 </p>
//               </div>
//             ) : (
//               <button
//                 type="button"
//                 className="open-btn cursor-pointer border-2 border-dashed border-gray-400 bg-white p-4"
//                 onClick={onOpenModal}
//               >
//                 + add session
//               </button>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default SessionBtn;

type SessionBtnProps = {
  onOpenModal: () => void;
};

const SessionBtn = ({ onOpenModal }: SessionBtnProps) => {
  const boxes = Array.from({ length: 10 }, (_, index) => index + 1);
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {boxes.map((boxes) => (
        <div
          className="flex flex-1 items-center justify-center border-t border-dashed border-gray-400"
          key={boxes}
        >
          <button
            className="bg-white p-4 border-2 border-dashed border-gray-400 cursor-pointer"
            onClick={onOpenModal}
          >
            + add session
          </button>
        </div>
      ))}
    </div>
  );
};

export default SessionBtn;
