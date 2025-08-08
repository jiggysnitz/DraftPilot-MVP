
/**
 * ADP ingest + tiering (skeleton)
 * Primary: FantasyPros (API key), Fallback: FantasyNerds (no-auth)
 * Cache layer can be added here.
 */

import { Player } from './types'

export async function fetchMergedADP(): Promise<Player[]> {
  // TODO: wire real providers
  // Placeholder returns a tiny set for dev UI
  return [
    { id: 'p1', name: 'Justin Jefferson', pos: 'WR', team: 'MIN', bye: 6, adp: 1.3, tier: 1 },
    { id: 'p2', name: 'Christian McCaffrey', pos: 'RB', team: 'SF', bye: 9, adp: 1.7, tier: 1 },
    { id: 'p3', name: 'Ja'Marr Chase', pos: 'WR', team: 'CIN', bye: 7, adp: 2.1, tier: 1 },
  ]
}

export function buildTiers(players: Player[], tierSize = 12) {
  const sorted = [...players].sort((a,b)=>a.adp - b.adp)
  let tier = 1
  return sorted.map((p, idx) => ({ ...p, tier: Math.floor(idx / tierSize) + 1 }))
}
