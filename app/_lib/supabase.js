import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  'https://walqmwezdwtycnzerkvd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhbHFtd2V6ZHd0eWNuemVya3ZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0NjA3NTcsImV4cCI6MjA0NzAzNjc1N30.xru0GW3_6208eZoGCPzHQPcPatWpCXAqk4la4KqRnx4'
);
