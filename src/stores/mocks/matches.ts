import { Match } from '../matchesStore'

export const mockMatches: Match[] = [
  {
    id: '1',
    homeTeam: 'Manchester United',
    awayTeam: 'Liverpool',
    score: {
      home: 2,
      away: 1
    },
    minute: 75,
    period: 2,
    gameType: 'league',
    isWatching: true
  },
  {
    id: '2',
    homeTeam: 'Barcelona',
    awayTeam: 'Real Madrid',
    score: {
      home: 0,
      away: 0
    },
    minute: 15,
    period: 1,
    gameType: 'cup',
    isWatching: true
  },
  {
    id: '3',
    homeTeam: 'Bayern Munich',
    awayTeam: 'Borussia Dortmund',
    score: {
      home: 3,
      away: 2
    },
    minute: 90,
    period: 2,
    gameType: 'league',
    isWatching: false
  },
  {
    id: '4',
    homeTeam: 'PSG',
    awayTeam: 'Marseille',
    score: {
      home: 1,
      away: 1
    },
    minute: 60,
    period: 2,
    gameType: 'friendly',
    isWatching: true
  }
] 