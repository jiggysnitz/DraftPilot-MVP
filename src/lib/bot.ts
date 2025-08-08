
/**
 * Bot scoring scaffold
 */
import { Player, DraftState } from './types'

type Weights = {
  randomness: number // 0..1
}

export function scoreCandidate(p: Player, state: DraftState, w: Weights): number {
  const tierWeight = (10 - p.tier) * 10
  const rosterNeed = 0 // TODO
  const scarcity = 0   // TODO analyze remaining pool
  const runDetect = 0  // TODO examine recent picks
  const byeBalance = 0 // TODO compare team rosters
  const reachPenalty = Math.max(0, Math.floor((state.board.length + 1) - p.adp))
  const epsilon = Math.random() * (w.randomness * 3)

  return tierWeight + rosterNeed + scarcity + runDetect + byeBalance - reachPenalty + epsilon
}
