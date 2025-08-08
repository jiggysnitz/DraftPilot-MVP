
import { NextResponse } from 'next/server'

export async function POST(req: Request, { params }: { params: { id: string }}) {
  // TODO: revert last pick for session
  return NextResponse.json({ ok: true, id: params.id })
}
