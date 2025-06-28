// Simple test to verify Sanity connection and data
require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

console.log('🔍 SANITY STUDIO DIAGNOSTIC TEST');
console.log('================================');

// Environment check
console.log('1. Environment Variables:');
console.log('   Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log('   Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log('   API Version:', process.env.NEXT_PUBLIC_SANITY_API_VERSION);
console.log('   Token:', process.env.SANITY_API_TOKEN ? 'Present' : 'Missing');

// Create client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false
});

async function diagnosticTest() {
  try {
    console.log('\n2. Connection Test:');
    
    // Test basic connection
    const result = await client.fetch('*[_type == "headline"]');
    console.log('   ✅ Connected successfully');
    console.log('   📊 Found', result.length, 'headlines');
    
    if (result.length > 0) {
      console.log('\n3. Sample Data:');
      const sample = result[0];
      console.log('   Title:', sample.title || 'No title');
      console.log('   Published:', sample.published);
      console.log('   Created:', sample._createdAt);
      console.log('   Fields available:', Object.keys(sample));
    }
    
    // Test all document types
    console.log('\n4. Available Document Types:');
    const allDocs = await client.fetch('*[]{"type": _type}');
    const types = [...new Set(allDocs.map(doc => doc.type))];
    types.forEach(type => {
      console.log('   -', type);
    });
    
    console.log('\n✅ DIAGNOSIS COMPLETE - Connection working!');
    
  } catch (error) {
    console.log('\n❌ CONNECTION FAILED:');
    console.log('   Error:', error.message);
    console.log('   This indicates a configuration problem.');
  }
}

diagnosticTest();
