import { createClient } from '@supabase/supabase-js'
// import type { Database } from './types'
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY
// const supabaseKey = process.env.SUPABASE_KEY
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)