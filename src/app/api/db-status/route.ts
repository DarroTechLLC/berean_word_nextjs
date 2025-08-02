import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // Simple query to check if the database is connected
    await prisma.$queryRaw`SELECT 1`;
    
    return NextResponse.json({ connected: true });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ connected: false, error: 'Failed to connect to database' });
  }
}