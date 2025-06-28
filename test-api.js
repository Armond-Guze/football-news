// Test script to check API permissions
const projectId = '9r984pin';
const token = 'skHPERrRNvqwTJhE4siT8DEAey1Sx56A2yjBcr3o5LPucyo0IS0k28Cj5rW5FM7E59p4v5HuXy7vc5gaLOOYhVeGo6etKufnmbSGwVcm3FleyQKuqGJKJo4RjiCOzNPxxtm9OPpzU3SCOIVltGZyR8jERYMiOW44cTQJcRb3WUJvpl0Zztj5';

async function testAPIAccess() {
  console.log('🔍 Testing API access...');
  
  try {
    // Test 1: Basic query - using project hostname
    console.log('\n1. Testing basic document query...');
    const queryResponse = await fetch(`https://${projectId}.api.sanity.io/v2021-10-21/data/query/production?query=*[0...1]`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (queryResponse.ok) {
      const data = await queryResponse.json();
      console.log('✅ Query successful, documents found:', data.result.length);
    } else {
      console.log('❌ Query failed:', queryResponse.status, queryResponse.statusText);
      const errorText = await queryResponse.text();
      console.log('Error details:', errorText);
    }
    
    // Test 2: Document count - using project hostname
    console.log('\n2. Testing document count...');
    const countResponse = await fetch(`https://${projectId}.api.sanity.io/v2021-10-21/data/query/production?query=count(*)`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (countResponse.ok) {
      const countData = await countResponse.json();
      console.log('✅ Count successful, total documents:', countData.result);
    } else {
      console.log('❌ Count failed:', countResponse.status, countResponse.statusText);
    }
    
  } catch (error) {
    console.log('❌ Network error:', error.message);
  }
}

testAPIAccess();
