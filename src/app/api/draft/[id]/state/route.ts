
import { NextResponse } from 'next/server'

export async function GET(_req: Request, { params }: { params: { id: string }}) {
  // TODO: return current draft state
  return NextResponse.json({ id: params.id, state: 'TODO' })
}
