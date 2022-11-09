import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../header/Header'
import Headline from '../../Headline Section/Headline'
import ElevationContainer from '../ElevationContainer/ElevationContainer'
import "./BaseContainer.css"

const BaseContainer = () => {
  return (
    <>
    <div className='container-bg'>
    <Header/>
    <Headline/>
    <ElevationContainer />
    <Footer/>
    </div>
    </>
  )
}

export default BaseContainer