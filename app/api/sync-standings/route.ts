import { NextRequest, NextResponse } from 'next/server';
import { syncStandingsToSanity } from '@/lib/sync-standings';

export async function POST(request: NextRequest) {
  try {
    // Optional: Add authentication here
    // const authHeader = request.headers.get('authorization');
    // if (!authHeader || authHeader !== `Bearer ${process.env.SYNC_API_KEY}`) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    console.log('API: Starting standings sync...');
    const result = await syncStandingsToSanity();
    
    if (result.success) {
      return NextResponse.json({
        message: 'Standings synced successfully',
        result
      });
    } else {
      return NextResponse.json({
        message: 'Sync completed with errors',
        result
      }, { status: 207 }); // 207 = Multi-Status
    }
  } catch (error) {
    console.error('API: Sync error:', error);
    return NextResponse.json({
      error: 'Failed to sync standings',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'NFL Standings Sync API',
    usage: 'POST to this endpoint to trigger a sync',
    status: 'ready'
  });
}
