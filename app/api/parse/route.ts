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
  } catch (err: any) {
    console.error('Parse error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
