
const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'github'
})