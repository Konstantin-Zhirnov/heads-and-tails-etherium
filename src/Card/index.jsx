import React from 'react'

import styles from './Card.module.sass'

const Card = ({ name, address, img, title }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <div className={styles.info}>
        <img alt="coin" src={`/${img}.png`} />

        <div className={styles.text}>
          <p>
            <span>Name:</span> {name}
          </p>
          <p title={address}>
            <span>Address:</span> {address}
          </p>
        </div>
      </div>
    </div>
  )
}

export { Card }
