
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config'
const supabase = createClient('https://torthiwfsqwzbcveiimx.supabase.co', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcnRoaXdmc3F3emJjdmVpaW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MDkxODUsImV4cCI6MjAxMTQ4NTE4NX0.9FnyfQPJQ5puR_MQnK7RvwiBeuYy7DNjBZcVH1y3eOI")


const { data, error } = await supabase.auth.signInWithPassword({
  email: 'bikeeee@gmail.com',
  // password: 'passs321321daseqw12354421',
  password: 'passs321312321daseqw12354421',
})
console.log(data)
console.log(error)


