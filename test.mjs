import { createClient } from '@supabase/supabase-js';

// Supabase credentials
const supabaseUrl = 'https://sljilzeejvapihghhcrs.supabase.co';
const supabaseKey = '';// Paste Here the API Key
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchActivities() {
  const { data, error } = await supabase
    .from('relatives')
    .select('*'); 

  if (error) {
    console.error('❌ Error fetching activities:', error.message);
  } else {
    console.log('✅ Activities:');
    console.table(data); 
  }
}

fetchActivities();
