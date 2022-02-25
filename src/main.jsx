import React from 'react'
import ReactDOM from 'react-dom'
import { Header } from './components/Header'
import Gallery from './components/Gallery'
import LearnUseState from './components/LearnUseState'

import './styles/main.css'
import Layout from './components/Layout'

ReactDOM.render(
  <React.StrictMode>
    <>
      <Header />
      <Layout />
      {/*  <Gallery /> */}
      {/* <LearnUseState /> */}
    </>
  </React.StrictMode>,
  document.getElementById('root')
)
