import React from 'react'

import { Divider } from '../Divider'

import styles from './Rules.module.sass'

const Rules = () => {
  return (
    <div className={styles.rules}>
      <h1>Rules of the Game "Heads and Tails"</h1>
      <p>
        Welcome to the blockchain game "Heads and Tails"! Follow the instructions below to join the
        game, place your bet, and test your luck.
      </p>

      <Divider />

      <h3>Getting Started</h3>
      <ol>
        <li>Make sure you have the MetaMask wallet installed and configured.</li>
        <li>Switch to the Sepolia test network in MetaMask.</li>
        <li>Ensure you have at least 0.04 ETH in your wallet to place a bet.</li>
      </ol>

      <Divider />

      <h3>How to Play</h3>
      <ol>
        <li>Click the "Connect Wallet" button on the website to connect your MetaMask wallet.</li>
        <li>Enter your name in the designated field. This name will be displayed in the game.</li>
        <li>
          Choose a coin side:
          <ul>
            <li>Heads</li>
            <li>Tails</li>
          </ul>
        </li>
        <li>Click the "Place Bet" button.</li>
        <li>
          Confirm the transaction in MetaMask. 0.04 ETH will be automatically deducted from your
          wallet.
        </li>
      </ol>

      <Divider />

      <h3>Game Rules</h3>
      <ol>
        <li>The game starts when the first player places a bet on one side of the coin.</li>
        <li>The second player must choose the opposite side of the coin and place their bet.</li>
        <li>Once both players have placed their bets, the system automatically flips the coin.</li>
        <li>
          The winner is determined randomly:
          <ul>
            <li>If the coin lands on Heads, the player who bet on Heads wins.</li>
            <li>If the coin lands on Tails, the player who bet on Tails wins.</li>
          </ul>
        </li>
        <li>
          The winner receives 90% of the total bet pool, while the remaining 10% goes to the game
          owner.
        </li>
      </ol>

      <Divider />

      <h3>What Happens After the Game?</h3>
      <ul>
        <li>
          If you win, your winnings will be automatically transferred to your MetaMask wallet.
        </li>
        <li>If you lose, the amount of your bet is not refunded.</li>
      </ul>

      <Divider />

      <h3>Additional Rules</h3>
      <ul>
        <li>
          Only one bet can be placed on each coin side. If your chosen side is already taken, you
          must select the other side.
        </li>
        <li>Each bet is fixed at 0.04 ETH.</li>
        <li>
          If there’s an error (e.g., insufficient funds), your transaction will not go through.
        </li>
      </ul>

      <Divider />

      <h3>Example Game</h3>
      <ol>
        <li>
          Player 1 connects their wallet, enters the name "Alice," and selects Heads. They confirm
          the transaction.
        </li>
        <li>
          Player 2 connects their wallet, enters the name "Bob," and selects Tails. They confirm the
          transaction.
        </li>
        <li>
          The coin is flipped, and the result is determined randomly:
          <ul>
            <li>If the coin lands on Heads, Alice wins 0.072 ETH, and Bob loses.</li>
            <li>If the coin lands on Tails, Bob wins 0.072 ETH, and Alice loses.</li>
          </ul>
        </li>
      </ol>

      <Divider />

      <h2>Good luck and have fun! May the odds be in your favor! 🎉</h2>
    </div>
  )
}

export { Rules }
