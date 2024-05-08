import { createClient } from '@supabase/supabase-js'
// const createClient = require('@supabase/supabase-js')
// Create a single supabase client for interacting with your database
const supabase = createClient('https://torthiwfsqwzbcveiimx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvcnRoaXdmc3F3emJjdmVpaW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5MDkxODUsImV4cCI6MjAxMTQ4NTE4NX0.9FnyfQPJQ5puR_MQnK7RvwiBeuYy7DNjBZcVH1y3eOI')
