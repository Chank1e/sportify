import { defineStore } from 'pinia'
import { ref } from 'vue'
import { mockMatches } from '@/stores/mocks/matches.ts';

export type GameType = 'league' | 'cup' | 'friendly'

export interface Match {
  id: string
  homeTeam: string
  awayTeam: string
  score: {
    home: number
    away: number
  }
  minute: number
  period: number
  gameType: GameType
  isWatching: boolean
}

export const useMatchesStore = defineStore('matches', () => {
  const matches = ref<Match[]>(mockMatches)

  function addMatch(match: Match) {
    matches.value.push(match)
  }

  function removeMatch(id: string) {
    matches.value = matches.value.filter(match => match.id !== id)
  }

  function updateMatch(id: string, updates: Partial<Match>) {
    const index = matches.value.findIndex(match => match.id === id)
    if (index !== -1) {
      matches.value[index] = { ...matches.value[index], ...updates }
    }
  }

  function toggleWatch(id: string) {
    const match = matches.value.find(match => match.id === id)
    if (match) {
      match.isWatching = !match.isWatching
    }
  }

  function getWatchingMatches() {
    return matches.value.filter(match => match.isWatching)
  }

  return {
    matches,
    addMatch,
    removeMatch,
    updateMatch,
    toggleWatch,
    getWatchingMatches
  }
})
