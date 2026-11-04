DROP POLICY IF EXISTS "Allow public session deletes" ON public.sessions;

CREATE POLICY "Allow public session deletes"
  ON public.sessions
  FOR DELETE
  TO anon
  USING (true);
