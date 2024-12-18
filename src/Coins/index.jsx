import React from 'react'
import { useShallow } from 'zustand/react/shallow'

import { useStore } from '../store.js'

import styles from './Coins.module.sass'

const Coins = () => {
  const { players, selectedSide, setSelectedSide, winner } = useStore(
    useShallow((store) => ({
      players: store.players,
      selectedSide: store.selectedSide,
      setSelectedSide: store.setSelectedSide,
      winner: store.winner,
    })),
  )

  const handleClick = (value) => () => {
    setSelectedSide(value)
  }

  return (
    <div className={styles.coins}>
      <label
        htmlFor="Heads"
        className={`${styles.coin} ${players.heads?.name && !winner?._name && styles.disable}`}
      >
        <img src="/heads.png" alt="Heads" />
        <input
          id="Heads"
          type="radio"
          disabled={players.heads?.name && !winner?._name}
          checked={selectedSide === 0}
          onChange={handleClick(0)}
        />
      </label>

      <label
        htmlFor="Teils"
        className={`${styles.coin} ${players.tails?.name && !winner?._name && styles.disable}`}
      >
        <img src="/tails.png" alt="Tails" />
        <input
          id="Teils"
          type="radio"
          disabled={players.tails?.name && !winner?._name}
          checked={selectedSide === 1}
          onChange={handleClick(1)}
        />
      </label>
    </div>
  )
}

export { Coins }
