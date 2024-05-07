
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key', {
  // Provide a custom schema. Defaults to "public".
  db: { schema: 'other_schema' }
})