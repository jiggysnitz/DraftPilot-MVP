
import { NextResponse } from 'next/server'

export async function GET(_req: Request, { params }: { params: { id: string }}) {
  // TODO: generate CSV from picks
  const csv = 'overall,round,slot,teamId,playerId,auto,timeMs\n'
  return new NextResponse(csv, {
    headers: { 'content-type': 'text/csv', 'content-disposition': `attachment; filename="draft-${params.id}.csv"` }
  })
}
