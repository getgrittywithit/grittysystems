import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { appId, action } = body;

    if (!appId) {
      return NextResponse.json(
        { error: 'App ID is required' },
        { status: 400 }
      );
    }

    if (!action || !['vote', 'unvote'].includes(action)) {
      return NextResponse.json(
        { error: 'Valid action (vote/unvote) is required' },
        { status: 400 }
      );
    }

    // Here you would typically update the database
    // For now, we'll just log it and return success
    const voteData = {
      appId,
      action,
      timestamp: new Date().toISOString(),
      // In a real app, you'd get user ID from authentication
      userId: 'anonymous-' + Date.now()
    };

    console.log('Vote action:', voteData);

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 200));

    return NextResponse.json(
      { 
        message: `Successfully ${action}d for app ${appId}`,
        appId,
        action
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Voting API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const appId = searchParams.get('appId');

    // Here you would typically fetch from database
    // For now, return mock data
    if (appId) {
      return NextResponse.json({
        appId,
        votes: Math.floor(Math.random() * 50) + 10,
        userHasVoted: false // In real app, check based on user authentication
      });
    } else {
      // Return all vote counts
      const mockVotes = {
        'phone-app': 42,
        'crypto-platform': 38,
        'car-rental-app': 31,
        'restaurant-system': 29,
        'wellness-tracker': 26,
        'logistics-platform': 23,
        'ai-assistant': 35,
        'event-platform': 20
      };

      return NextResponse.json({ votes: mockVotes });
    }
  } catch (error) {
    console.error('Voting API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}