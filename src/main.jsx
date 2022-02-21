import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './components/Header'
import LearnUseState from './components/LearnUseState'

import './styles/main.css'

ReactDOM.render(
  <React.StrictMode>
    <>
      <Header />
      <LearnUseState />
    </>
  </React.StrictMode>,
  document.getElementById('root')
)
