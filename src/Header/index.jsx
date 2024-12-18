import React from 'react'
import { useShallow } from 'zustand/react/shallow'

import { useStore } from '../store.js'
import Logo from '../../public/logo.svg?react'

import { ConnectButton } from './ConnectButton'

import styles from './Header.module.sass'

const Header = () => {
  const { account } = useStore(useShallow((state) => ({ account: state.account })))

  return (
    <header className={styles.header}>
      <Logo />
      <h1>Heads & Tails</h1>

      {!account && <ConnectButton />}
    </header>
  )
}

export { Header }
