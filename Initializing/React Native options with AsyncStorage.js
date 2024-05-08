
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from "@react-native-async-storage/async-storage";

const supabase = createClient("https://okobszhsjvdkgoimnjwa.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rb2JzemhzanZka2dvaW1uandhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMjc2MDUsImV4cCI6MjAyOTYwMzYwNX0._rvvKrnKchELmrDvHyRc062cIhQJirmQxWYBDDReBWA", {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

console.log(supabase)