import React from 'react'
import { useShallow } from 'zustand/react/shallow'

import { useStore } from '../store.js'

import { Card } from '../Card/index.jsx'

import styles from './Player.module.sass'

const Player = () => {
  const { headsName, headsAddress, tailsName, tailsAddress } = useStore(
    useShallow((store) => ({
      headsName: store.players.heads?.name,
      headsAddress: store.players.heads?.address,
      tailsName: store.players.tails?.name,
      tailsAddress: store.players.tails?.address,
    })),
  )

  if (!headsName && !tailsName) return null

  return (
    <div className={styles.player}>
      {headsName && <Card name={headsName} address={headsAddress} title="Player:" img="heads" />}
      {tailsName && <Card name={tailsName} address={tailsAddress} title="Player:" img="tails" />}
    </div>
  )
}

export { Player }
