import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our contacts table
export interface Contact {
  id: string;
  name: string;
  email: string;
  type: 'general' | 'investor' | 'beta' | 'partner' | 'press';
  message: string;
  subscribed: boolean;
  created_at: string;
}

// Insert a new contact
export async function insertContact(contactData: Omit<Contact, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('contacts')
    .insert([contactData])
    .select()
    .single();

  if (error) {
    console.error('Error inserting contact:', error);
    throw error;
  }

  return data;
}

// Get all contacts (for admin)
export async function getContacts() {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }

  return data;
}