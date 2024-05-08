
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://okobszhsjvdkgoimnjwa.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rb2JzemhzanZka2dvaW1uandhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwMjc2MDUsImV4cCI6MjAyOTYwMzYwNX0._rvvKrnKchELmrDvHyRc062cIhQJirmQxWYBDDReBWA")


const { data, error } = await supabase.auth.signInWithPassword({
  email: 'bikeeee@gmail.com',
  password: 'pass1233210012321321',
})
console.log(data)
console.log(error)
// const { data, error } = await supabase.auth.signInWithPassword({
//   email: 'bikeeee@gmail.com',
//   password: 'passs321321daseqw12354421',
// })
// console.log(data)
// console.log(error)




//
// const { dataa, errror } = await supabase.auth.updateUser({     #password updater
//   password: "pass1233210012321321"
// })
//
// console.log(dataa)
// console.log(errror)

