
import { NextResponse } from 'next/server'

export async function POST(req: Request, { params }: { params: { id: string }}) {
  const body = await req.json().catch(()=>({}))
  // TODO: validate, update state, advance clock
  return NextResponse.json({ ok: true, id: params.id, pick: body })
}
