// Load environment variables
require('dotenv').config({ path: '.env.local' });

console.log('🔍 Environment Variables Check:');
console.log('================================');
console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '❌ NOT SET');
console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET || '❌ NOT SET');
console.log('API Version:', process.env.NEXT_PUBLIC_SANITY_API_VERSION || '❌ NOT SET');
console.log('API Token:', process.env.SANITY_API_TOKEN ? '✅ SET (length: ' + process.env.SANITY_API_TOKEN.length + ')' : '❌ NOT SET');
console.log('================================');

// Test Sanity client connection
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
});

console.log('\n🔄 Testing Sanity connection...');
client.fetch('*[_type == "headline"][0]')
  .then(result => {
    console.log('✅ Sanity connection successful!');
    console.log('📰 Found headline:', result ? result.title || result.headline || 'No title field' : 'No headlines found');
  })
  .catch(error => {
    console.log('❌ Sanity connection failed:', error.message);
  });
