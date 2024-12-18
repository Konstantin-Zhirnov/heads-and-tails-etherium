import React from 'react'

import Loader from '../assets/spinning.svg?react'

import styles from './LoadingButton.module.sass'

const LoadingButton = () => (
  <div className={styles.btn}>
    <Loader />
  </div>
)

export { LoadingButton }
