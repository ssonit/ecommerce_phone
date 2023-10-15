import { NextResponse } from 'next/server';

export async function GET() {
  // const { searchParams } = new URL(req.url);

  // const params = Object.fromEntries(searchParams.entries());

  return NextResponse.json({
    message: 'Get products successfully'
  });
}
