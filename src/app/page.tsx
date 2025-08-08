
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [teams, setTeams] = useState(12)
  const [timer, setTimer] = useState(45)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Create a Draft</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-lg bg-brand-surface p-4 space-y-3">
          <h2 className="font-medium">Settings</h2>
          <div className="flex items-center justify-between">
            <label>Teams</label>
            <input className="bg-black/20 px-2 py-1 rounded w-24 text-right" type="number" value={teams} min={8} max={14} onChange={e=>setTeams(parseInt(e.target.value||'12',10))}/>
          </div>
          <div className="flex items-center justify-between">
            <label>Pick Timer (sec)</label>
            <input className="bg-black/20 px-2 py-1 rounded w-24 text-right" type="number" value={timer} min={10} max={180} onChange={e=>setTimer(parseInt(e.target.value||'45',10))}/>
          </div>
          <p className="text-sm text-brand-textMuted">Default roster: 1 QB / 2 WR / 2 RB / 1 TE / 1 FLEX / 7 Bench • Half-PPR</p>
          <button className="rounded bg-brand-primary px-3 py-2 text-black font-medium">Start Mock</button>
        </div>
        <div className="rounded-lg bg-brand-surface p-4 space-y-3">
          <h2 className="font-medium">Import from Sleeper</h2>
          <p className="text-sm text-brand-textMuted">Paste a league ID to mirror team count & roster (optional).</p>
          <input className="bg-black/20 px-2 py-1 rounded w-full" placeholder="League ID" />
          <button className="rounded border border-white/10 px-3 py-2">Import</button>
        </div>
      </div>
      <div className="rounded-lg bg-brand-surface p-4">
        <h2 className="font-medium mb-2">Coming up next</h2>
        <ul className="list-disc pl-6 text-sm text-brand-textMuted space-y-1">
          <li>ADP ingest + dynamic tiers</li>
          <li>Bot engine with roster need + scarcity + run detection</li>
          <li>Live draft board, queues, CSV export</li>
        </ul>
      </div>
    </div>
  )
}
