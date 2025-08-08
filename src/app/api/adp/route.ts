
import { NextResponse } from 'next/server'
import { LeagueSettings } from '@/src/lib/types'

export async function GET() {
  const players = await fetchMergedADP()
  const withTiers = buildTiers(players)
  return NextResponse.json({ players: withTiers, refreshedAt: new Date().toISOString() })
}
