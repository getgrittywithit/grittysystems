-- Create contacts table for GrittySystems contact form
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  type text NOT NULL CHECK (type IN ('general', 'investor', 'beta', 'partner', 'press')),
  message text NOT NULL,
  subscribed boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_type ON contacts (type);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts (email);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy for public inserts (contact form submissions)
CREATE POLICY "Allow public contact form submissions" ON contacts
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy for authenticated reads (admin dashboard)
CREATE POLICY "Allow authenticated reads" ON contacts
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Grant necessary permissions
GRANT INSERT ON contacts TO anon;
GRANT SELECT ON contacts TO authenticated;

-- Verify table creation
SELECT 'Contacts table created successfully!' as status;