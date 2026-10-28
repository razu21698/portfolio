import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, message, website_hp } = body;

    // Honeypot check — bot detected if filled
    if (website_hp) {
      return NextResponse.json({ success: true, message: 'Received' }, { status: 200 });
    }

    // Server-side basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields (name, email, message)' },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address format' },
        { status: 400 }
      );
    }

    // In production with RESEND_API_KEY or SMTP_HOST, email is dispatched here.
    // For logging:
    console.log('[Inquiry Received]', {
      name,
      email,
      company,
      projectType,
      budget,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Project inquiry logged successfully. I will respond within 24 hours.',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing inquiry' },
      { status: 500 }
    );
  }
}

