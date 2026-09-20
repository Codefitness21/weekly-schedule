
export type Session = {
  id: number;
  instructor: string;
  backUp: string | null;
  sub: boolean;
  session_date: string;
  location: string;
  startTime: string | null;
  endTime: string | null;
  status: string | null;
  hub: string | null;
  belt: string | null;
  camp: string | null;
  notes: string | null;
};