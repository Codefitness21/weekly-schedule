
export type Session = {
  id: number;
  instructor: string;
  sub: boolean;
  session_date: string;
  location: string;
  startTime: string;
  endTime: string;
  status: string | null;
  hub: string | null;
  belt: string | null;
  camp: string | null;
  notes: string | null;
  slot: number | null;
};