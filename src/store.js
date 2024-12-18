import { create } from 'zustand'

export const useStore = create()((set) => ({
  account: null,
  setAccount: (account) => set(() => ({ account }), false, 'setAccount'),

  balance: null,
  setBalance: (balance) => {
    const safeBalance = typeof balance === 'bigint' ? balance.toString() : balance
    set({ balance: safeBalance }, false, 'setBalance')
  },

  web3: null,
  setWeb3: (web3) => set(() => ({ web3 }), false, 'setWeb3'),

  contract: null,
  setContract: (contract) => set(() => ({ contract }), false, 'setContract'),

  players: {
    heads: null,
    tails: null,
  },
  setPlayers: (players) => set(() => ({ players }), false, 'setPlayers'),

  winner: null,
  setWinner: (winner) => set(() => ({ winner }), false, 'setWinner'),

  playerName: '',
  setPlayerName: (playerName) => set(() => ({ playerName }), false, 'setPlayerName'),

  selectedSide: null,
  setSelectedSide: (selectedSide) => set(() => ({ selectedSide }), false, 'setSelectedSide'),
}))
