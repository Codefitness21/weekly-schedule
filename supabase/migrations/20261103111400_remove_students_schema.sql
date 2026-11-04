DROP TABLE IF EXISTS public.students;

ALTER TABLE public.sessions
  DROP COLUMN IF EXISTS students;
