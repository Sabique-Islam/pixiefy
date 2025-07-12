import { fetchProfileFromUrl } from '@/lib/platforms'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get('url')

  if (!url) {
    return NextResponse.json({ error: 'Missing URL' }, { status: 400 })
  }

  try {
    const profile = await fetchProfileFromUrl(url)
    return NextResponse.json(profile)
  } catch (err: unknown) {
    console.error('Parse error:', (err as Error).message)
    return NextResponse.json({ error: (err as Error).message }, { status: 400 })
  }
}
