
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://okobszhsjvdkgoimnjwa.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rb2JzemhzanZka2dvaW1uandhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMjc2MDUsImV4cCI6MjAyOTYwMzYwNX0._rvvKrnKchELmrDvHyRc062cIhQJirmQxWYBDDReBWA")



const { dataa, errorr } = await supabase
    .from('messages')
    .select(`
    content,
    
  `)
console.log('sad',dataa)
console.log(errorr)
// To infer types, use the name of the table (in this case `users`) and
// the name of the foreign key constraint.
const { data, error } = await supabase
    .from('messages')
    .select(`
    content,
    from:users!messages_sender_id_fkey(name),
    to:users!messages_receiver_id_fkey(name)
  `)
console.log(data)
console.log(data[0]['from']['name'],data[0]['to']['name'],data[0]['content'])
console.log(error)