import React from 'react'
import { useShallow } from 'zustand/react/shallow'

import { useStore } from '../../store.js'
import { fetchParticipants } from '../../helpers.js'

import styles from './ConnectButton.module.sass'

const ConnectButton = () => {
  const { account, setAccount, web3, contract, setPlayers, setWinner } = useStore(
    useShallow((state) => ({
      account: state.account,
      setAccount: state.setAccount,
      web3: state.web3,
      contract: state.contract,
      setPlayers: state.setPlayers,
      setWinner: state.setWinner,
    })),
  )

  const connect = async () => {
    try {
      if (web3) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        setAccount(accounts[0])
      }
    } catch (err) {
      console.error('Error connecting wallet:', err)
    }
    await fetchParticipants(contract, setPlayers, setWinner)
  }

  if (account) return null

  return (
    <button onClick={connect} className={styles.btn}>
      Connect Wallet
    </button>
  )
}

export { ConnectButton }
