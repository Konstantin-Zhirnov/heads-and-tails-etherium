import React from 'react'
import { ToastContainer } from 'react-toastify'

import { Header } from './Header'
import { Content } from './Content'

import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Content />
      </main>
      <ToastContainer />
    </>
  )
}

export default App
