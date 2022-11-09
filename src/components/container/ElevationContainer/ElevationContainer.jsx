import React from 'react'
import SectionOne from '../../Sections/SectionOne/SectionOne'
import SectionThree from '../../Sections/SectionThree/SectionThree'
import SectionTwo from '../../Sections/SectionTwo/SectionTwo'
import "./ElevationContainer.css"

const ElevationContainer = () => {
  return (
    <>
        <div className='elevation-bg'>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
        </div>
    </>
  )
}

export default ElevationContainer