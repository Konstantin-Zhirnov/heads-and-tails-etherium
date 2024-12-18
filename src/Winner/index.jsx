import React from 'react'
import { useShallow } from 'zustand/react/shallow'

import { useStore } from '../store.js'

import { Card } from '../Card'

import styles from './Winner.module.sass'

const Winner = () => {
  const { name, address } = useStore(
    useShallow((state) => ({
      name: state.winner?._name,
      address: state.winner?._address,
    })),
  )

  if (!name) return null

  return (
    <div className={styles.winner}>
      <h2>The results of the last game:</h2>
      <Card name={name} address={address} title="Winner:" img="winner" />
    </div>
  )
}

export { Winner }
