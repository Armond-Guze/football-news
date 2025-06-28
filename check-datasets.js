// Test script to check datasets
const projectId = '9r984pin';
const token = 'skHPERrRNvqwTJhE4siT8DEAey1Sx56A2yjBcr3o5LPucyo0IS0k28Cj5rW5FM7E59p4v5HuXy7vc5gaLOOYhVeGo6etKufnmbSGwVcm3FleyQKuqGJKJo4RjiCOzNPxxtm9OPpzU3SCOIVltGZyR8jERYMiOW44cTQJcRb3WUJvpl0Zztj5';

async function checkDatasets() {
  try {
    console.log('🔍 Checking datasets for project:', projectId);
    
    const response = await fetch(`https://api.sanity.io/v1/projects/${projectId}/datasets`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    if (response.ok) {
      const datasets = await response.json();
      console.log('✅ Datasets found:', datasets.map(d => d.name));
      
      // Check if 'production' exists
      const hasProduction = datasets.some(d => d.name === 'production');
      console.log('📊 Has production dataset:', hasProduction);
      
      if (!hasProduction) {
        console.log('❌ PROBLEM: No "production" dataset found!');
        console.log('💡 Available datasets:', datasets.map(d => d.name));
      }
    } else {
      console.log('❌ API Error:', response.status, response.statusText);
    }
  } catch (error) {
    console.log('❌ Error:', error.message);
  }
}

checkDatasets();
