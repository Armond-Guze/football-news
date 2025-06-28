import { NextRequest, NextResponse } from 'next/server';
import { client } from '@sanity/lib/client';

// Create a client with write permissions
const writeClient = client.withConfig({
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

export async function POST(request: NextRequest) {
  try {
    console.log('API: Starting team logos update...');
    
    // Get all existing standings
    const existingStandings = await writeClient.fetch(
      `*[_type == "standings"] { _id, teamName }`
    );

    if (!existingStandings.length) {
      return NextResponse.json({
        error: 'No standings found. Please sync standings first.',
      }, { status: 404 });
    }

    const operations = [];
    let updated = 0;
    let failed = 0;

    for (const standing of existingStandings) {
      try {
        // Get the logo URL from our mapping
        const logoUrl = getTeamLogoUrl(standing.teamName);
        
        if (logoUrl) {
          // Upload image from URL to Sanity
          const logoAssetId = await uploadImageFromUrl(logoUrl, standing.teamName);
          
          if (logoAssetId) {
            operations.push({
              patch: {
                id: standing._id,
                set: {
                  teamLogo: {
                    _type: 'image',
                    asset: {
                      _type: 'reference',
                      _ref: logoAssetId
                    }
                  }
                }
              }
            });
            updated++;
          } else {
            failed++;
          }
        } else {
          console.warn(`No logo URL found for: ${standing.teamName}`);
          failed++;
        }
      } catch (error) {
        console.error(`Error processing ${standing.teamName}:`, error);
        failed++;
      }
    }

    // Execute all operations
    if (operations.length > 0) {
      console.log(`Executing ${operations.length} logo updates...`);
      await writeClient.transaction(operations).commit();
    }

    return NextResponse.json({
      message: 'Team logos update completed',
      result: {
        success: true,
        updated,
        failed,
        total: existingStandings.length
      }
    });

  } catch (error) {
    console.error('API: Logo update error:', error);
    return NextResponse.json({
      error: 'Failed to update team logos',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

function getTeamLogoUrl(teamName: string): string | null {
  const logoMap: Record<string, string> = {
    // AFC East
    'Buffalo Bills': 'https://a.espncdn.com/i/teamlogos/nfl/500/buf.png',
    'Miami Dolphins': 'https://a.espncdn.com/i/teamlogos/nfl/500/mia.png',
    'New England Patriots': 'https://a.espncdn.com/i/teamlogos/nfl/500/ne.png',
    'New York Jets': 'https://a.espncdn.com/i/teamlogos/nfl/500/nyj.png',
    
    // AFC North
    'Baltimore Ravens': 'https://a.espncdn.com/i/teamlogos/nfl/500/bal.png',
    'Cincinnati Bengals': 'https://a.espncdn.com/i/teamlogos/nfl/500/cin.png',
    'Cleveland Browns': 'https://a.espncdn.com/i/teamlogos/nfl/500/cle.png',
    'Pittsburgh Steelers': 'https://a.espncdn.com/i/teamlogos/nfl/500/pit.png',
    
    // AFC South
    'Houston Texans': 'https://a.espncdn.com/i/teamlogos/nfl/500/hou.png',
    'Indianapolis Colts': 'https://a.espncdn.com/i/teamlogos/nfl/500/ind.png',
    'Jacksonville Jaguars': 'https://a.espncdn.com/i/teamlogos/nfl/500/jax.png',
    'Tennessee Titans': 'https://a.espncdn.com/i/teamlogos/nfl/500/ten.png',
    
    // AFC West
    'Denver Broncos': 'https://a.espncdn.com/i/teamlogos/nfl/500/den.png',
    'Kansas City Chiefs': 'https://a.espncdn.com/i/teamlogos/nfl/500/kc.png',
    'Las Vegas Raiders': 'https://a.espncdn.com/i/teamlogos/nfl/500/lv.png',
    'Los Angeles Chargers': 'https://a.espncdn.com/i/teamlogos/nfl/500/lac.png',
    
    // NFC East
    'Dallas Cowboys': 'https://a.espncdn.com/i/teamlogos/nfl/500/dal.png',
    'New York Giants': 'https://a.espncdn.com/i/teamlogos/nfl/500/nyg.png',
    'Philadelphia Eagles': 'https://a.espncdn.com/i/teamlogos/nfl/500/phi.png',
    'Washington Commanders': 'https://a.espncdn.com/i/teamlogos/nfl/500/wsh.png',
    
    // NFC North
    'Chicago Bears': 'https://a.espncdn.com/i/teamlogos/nfl/500/chi.png',
    'Detroit Lions': 'https://a.espncdn.com/i/teamlogos/nfl/500/det.png',
    'Green Bay Packers': 'https://a.espncdn.com/i/teamlogos/nfl/500/gb.png',
    'Minnesota Vikings': 'https://a.espncdn.com/i/teamlogos/nfl/500/min.png',
    
    // NFC South
    'Atlanta Falcons': 'https://a.espncdn.com/i/teamlogos/nfl/500/atl.png',
    'Carolina Panthers': 'https://a.espncdn.com/i/teamlogos/nfl/500/car.png',
    'New Orleans Saints': 'https://a.espncdn.com/i/teamlogos/nfl/500/no.png',
    'Tampa Bay Buccaneers': 'https://a.espncdn.com/i/teamlogos/nfl/500/tb.png',
    
    // NFC West
    'Arizona Cardinals': 'https://a.espncdn.com/i/teamlogos/nfl/500/ari.png',
    'Los Angeles Rams': 'https://a.espncdn.com/i/teamlogos/nfl/500/lar.png',
    'San Francisco 49ers': 'https://a.espncdn.com/i/teamlogos/nfl/500/sf.png',
    'Seattle Seahawks': 'https://a.espncdn.com/i/teamlogos/nfl/500/sea.png',
  };

  return logoMap[teamName] || null;
}

async function uploadImageFromUrl(url: string, teamName: string): Promise<string | null> {
  try {
    console.log(`Uploading logo for ${teamName}...`);
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }
    
    const buffer = await response.arrayBuffer();
    const asset = await writeClient.assets.upload('image', Buffer.from(buffer), {
      filename: `${teamName.toLowerCase().replace(/\s+/g, '-')}-logo.png`
    });
    
    console.log(`✅ Logo uploaded for ${teamName}`);
    return asset._id;
  } catch (error) {
    console.error(`❌ Error uploading logo for ${teamName}:`, error);
    return null;
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'NFL Team Logos Update API',
    usage: 'POST to this endpoint to add logos to existing standings',
    status: 'ready'
  });
}
