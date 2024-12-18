import React from 'react'
import { useShallow } from 'zustand/react/shallow'

import { useStore } from '../store.js'

import styles from './PlayerName.module.sass'

const PlayerName = () => {
  const { playerName, setPlayerName } = useStore(
    useShallow((state) => ({
      playerName: state.playerName,
      setPlayerName: state.setPlayerName,
    })),
  )

  const handleChange = (e) => {
    setPlayerName(e.target.value)
  }

  return (
    <div className={styles.playerName}>
      <label htmlFor="playerName">Name:</label>
      <input id="playerName" type="text" value={playerName} onChange={handleChange} />
    </div>
  )
}

export { PlayerName }
