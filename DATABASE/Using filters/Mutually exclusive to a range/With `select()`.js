import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://okobszhsjvdkgoimnjwa.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rb2JzemhzanZka2dvaW1uandhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMjc2MDUsImV4cCI6MjAyOTYwMzYwNX0._rvvKrnKchELmrDvHyRc062cIhQJirmQxWYBDDReBWA")

const { data, error } = await supabase
  .from('reservations')
  .select()
  .rangeAdjacent('during', '[2000-01-01 12:00, 2000-01-01 13:00)')

console.log(data)