


const { data, error } = await supabase.auth.signUp(
  {
    email: 'example@email.com',
    password: 'example-password',
    options: {
      emailRedirectTo: 'https://example.com/welcome'
    }
  }
)