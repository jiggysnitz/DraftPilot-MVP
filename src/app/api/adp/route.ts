
import { NextResponse } from 'next/server'
import { fetchMergedADP, buildTiers } from '@/src/lib/adp'

export async function GET() {
  const players = await fetchMergedADP()
  const withTiers = buildTiers(players)
  return NextResponse.json({ players: withTiers, refreshedAt: new Date().toISOString() })
}
