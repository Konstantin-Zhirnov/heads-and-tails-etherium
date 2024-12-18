import { toast } from 'react-toastify'

export const fetchParticipants = async (contract, setPlayers, setWinner) => {
  try {
    if (contract) {
      const headsPlayer = await contract.methods.getPlayer(0).call() // 0 - Heads
      const tailsPlayer = await contract.methods.getPlayer(1).call() // 1 - Tails
      const winner = await contract.methods.winner().call()

      setPlayers({
        heads: {
          name: headsPlayer._name,
          address: headsPlayer._address,
        },
        tails: {
          name: tailsPlayer._name,
          address: tailsPlayer._address,
        },
      })
      setWinner({
        _name: winner._name,
        _address: winner._address,
      })
    }
  } catch (err) {
    console.error('Error fetching players:', err)
  }
}

export const getBalance = async (account, web3Instance, setBalance) => {
  if (account && web3Instance) {
    try {
      const balanceWei = await web3Instance.eth.getBalance(account)
      const balanceEther = web3Instance.utils.fromWei(balanceWei, 'ether')
      setBalance(balanceEther)
    } catch (err) {
      console.error('Error getting balance:', err)
    }
  }
}

export const errorMessage = (text) => toast.error(text)
export const successMessage = (text) => toast.success(text)
