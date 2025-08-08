
export type Position = 'QB'|'RB'|'WR'|'TE'|'DST'|'K'

export type Scoring = {
  passYdsPerPt: number
  passTd: number
  rec: number
  rushYdsPerPt: number
  rushTd: number
}

export type Roster = {
  QB: number
  RB: number
  WR: number
  TE: number
  FLEX: number
  BENCH: number
}

export type LeagueSettings = {
  teams: number
  scoring: Scoring
  roster: Roster
  snake: boolean
}

export type Player = {
  id: string
  name: string
  pos: Position
  team: string
  bye: number
  adp: number
  tier: number
}

export type Pick = {
  overall: number
  round: number
  slot: number
  teamId: string
  playerId: string
  auto: boolean
  timeMs: number
}

export type DraftState = {
  board: Pick[]
  onClockTeamId: string
  round: number
  slot: number
  available: Record<string, Player>
  queues: Record<string, string[]>
}
