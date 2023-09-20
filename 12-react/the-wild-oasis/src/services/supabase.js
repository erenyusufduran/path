import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://lfazbrqzuauxduyiypir.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmYXpicnF6dWF1eGR1eWl5cGlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwNzIyMDcsImV4cCI6MjAxMDY0ODIwN30.1eGWnAPyjKpxTpG6U-yg77o78Fe2E8mj1rZs6YmBxTU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
