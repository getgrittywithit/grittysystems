-- Create grittysystems_contacts table (separate from existing contacts table)
CREATE TABLE IF NOT EXISTS grittysystems_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  type text NOT NULL CHECK (type IN ('general', 'investor', 'beta', 'partner', 'press')),
  message text NOT NULL,
  subscribed boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_grittysystems_contacts_created_at ON grittysystems_contacts (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_grittysystems_contacts_type ON grittysystems_contacts (type);
CREATE INDEX IF NOT EXISTS idx_grittysystems_contacts_email ON grittysystems_contacts (email);

-- Enable Row Level Security (optional but recommended)
ALTER TABLE grittysystems_contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy for public inserts (contact form submissions)
CREATE POLICY "Allow public grittysystems contact form submissions" ON grittysystems_contacts
  FOR INSERT 
  WITH CHECK (true);

-- Create a policy for authenticated reads (admin dashboard)
CREATE POLICY "Allow authenticated grittysystems reads" ON grittysystems_contacts
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Grant necessary permissions
GRANT INSERT ON grittysystems_contacts TO anon;
GRANT SELECT ON grittysystems_contacts TO authenticated;

-- Verify table creation
SELECT 'GrittySystems contacts table created successfully!' as status;