
import { NextResponse } from 'next/server'
import { LeagueSettings } from '@/src/lib/types'
import { randomUUID } from 'crypto'

export async function POST(req: Request) {
  const body = await req.json().catch(()=>({}))
  const id = randomUUID()
  const defaults: LeagueSettings = {
    teams: 12,
    snake: true,
    scoring: { passYdsPerPt: 25, passTd: 4, rec: 0.5, rushYdsPerPt: 10, rushTd: 6 },
    roster: { QB:1, WR:2, RB:2, TE:1, FLEX:1, BENCH:7 }
  }
  const settings = { ...defaults, ...(body?.settings||{}) }
  // TODO: persist session in a store; for now echo
  return NextResponse.json({ id, settings })
}
