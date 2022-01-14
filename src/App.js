import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Footer from './Components/Footer/Footer'

import './App.css'
import { action, comedy, originals, trending } from './urls'

function App() {
  return (
    <div>
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Originals' />
        <RowPost url={trending} title='Trending' isSmall />
        <RowPost url={action} title='Action' isSmall />
        <RowPost url={comedy} title='Comedy' isSmall />
        <Footer/>
    </div>
  )
}

export default App
