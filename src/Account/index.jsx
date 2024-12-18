import React, { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'

import { useStore } from '../store.js'
import { getBalance } from '../helpers.js'

import styles from './Account.module.sass'

const Account = () => {
  const { account, web3, setBalance, balance } = useStore(
    useShallow((store) => ({
      account: store.account,
      web3: store.web3,
      setBalance: store.setBalance,
      balance: store.balance,
    })),
  )

  useEffect(() => {
    if (account) {
      getBalance(account, web3, setBalance)
    }
  }, [account])

  return (
    <div className={styles.account}>
      <p>
        <span>Account:</span> {account}
      </p>
      <p>
        <span>Balance:</span> {balance}
      </p>
    </div>
  )
}

export { Account }
