import React, { useState } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { useStore } from '../store.js'
import { errorMessage, fetchParticipants, getBalance, successMessage } from '../helpers.js'

import { LoadingButton } from '../LoadingButton/index.jsx'

import styles from './PlaceBetButton.module.sass'

const PlaceBetButton = () => {
  const {
    account,
    web3,
    contract,
    playerName,
    selectedSide,
    setBalance,
    setPlayerName,
    setPlayers,
    setWinner,
  } = useStore(
    useShallow((state) => ({
      account: state.account,
      web3: state.web3,
      contract: state.contract,
      playerName: state.playerName,
      selectedSide: state.selectedSide,
      setBalance: state.setBalance,
      setPlayerName: state.setPlayerName,
      setPlayers: state.setPlayers,
      setWinner: state.setWinner,
    })),
  )

  const [loading, setLoading] = useState(false)

  const placeBet = async () => {
    if (!account) {
      errorMessage('Please connect your wallet!')
      return
    }

    if (!playerName) {
      errorMessage('Please enter your name!')
      return
    }

    if (selectedSide == null) {
      errorMessage('Please select side of coin!')
      return
    }

    try {
      setLoading(true)
      const betValue = web3.utils.toWei(import.meta.env.VITE_BET_AMOUNT, 'ether') // ETH to Wei
      await contract.methods
        .placeBet(playerName, selectedSide)
        .send({ from: account, value: betValue })

      successMessage('Bet placed!')
      setPlayerName('')
      await fetchParticipants(contract, setPlayers, setWinner)

      await getBalance(account, web3, setBalance)
    } catch (err) {
      errorMessage(err.message)
    } finally {
      setLoading(false)
    }
  }

  const getButton = () => {
    if (loading) return <LoadingButton />
    return (
      <button onClick={placeBet} className={styles.btn}>
        Place Bet
      </button>
    )
  }

  return <div className={styles.placeBetButton}>{getButton()}</div>
}

export { PlaceBetButton }
