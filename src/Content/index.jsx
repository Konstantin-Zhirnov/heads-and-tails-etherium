import React, { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import Web3 from 'web3'

import { abi } from '../constants.js'
import { useStore } from '../store.js'

import { Account } from '../Account'
import { PlayerName } from '../PlayerName'
import { Coins } from '../Coins'
import { Player } from '../Player'
import { Winner } from '../Winner'
import { PlaceBetButton } from '../PlaceBetButton'
import { Rules } from '../Rules'
import { Divider } from '../Divider'

import styles from './Content.module.sass'

const Content = () => {
  const { account, setAccount, setContract, setWeb3, contract, setWinner, setSelectedSide } =
    useStore(
      useShallow((state) => ({
        account: state.account,
        setAccount: state.setAccount,
        setContract: state.setContract,
        setWeb3: state.setWeb3,
        contract: state.contract,
        setWinner: state.setWinner,
        setSelectedSide: state.setSelectedSide,
        setPlayer: state.setPlayer,
      })),
    )

  useEffect(() => {
    const handleDisconnect = () => {
      console.log('Wallet disconnected')
      setAccount(null)
      setContract(null)
    }

    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        handleDisconnect()
      } else {
        setAccount(accounts[0])
      }
    }

    const handleChainChanged = () => {
      console.log('Network changed')
      handleDisconnect()
      window.location.reload()
    }

    const init = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum)
        setWeb3(web3Instance)

        const contractInstance = new web3Instance.eth.Contract(
          abi,
          import.meta.env.VITE_GAME_CONTRACT,
        )
        setContract(contractInstance)

        window.ethereum.on('accountsChanged', handleAccountsChanged)
        window.ethereum.on('chainChanged', handleChainChanged)

        // contract event subscriptions
        contractInstance.events.WinnerReady().on('data', (event) => {
          const { _address, _name } = event.returnValues.winner
          setWinner({ _address, _name })
          setSelectedSide(null)
        })
      } else {
        console.log('Ethereum wallet not found!')
      }
    }

    init()

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged)
        window.ethereum.removeListener('chainChanged', handleChainChanged)
      }
      if (contract?.events) {
        contract.events.WinnerReady().unsubscribe()
      }
    }
  }, [account])

  if (!account) return <Rules />

  return (
    <>
      <Account />

      <Coins />

      <div className={styles.content}>
        <PlayerName />

        <p>
          <span>Bet Amount:</span> {import.meta.env.VITE_BET_AMOUNT} ETH
        </p>

        <PlaceBetButton />
      </div>

      <Divider />

      <Winner />

      <Player />
    </>
  )
}

export { Content }
