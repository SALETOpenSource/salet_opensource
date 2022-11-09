import React from 'react'
import Card from '../../Card/Card'

const SectionTwo = () => {
  return (
    <>
      <div className="section-container">
      <p className='small-text'>AI No-Code Platform</p>
        <h1>Who should use SA.L.E.T.?</h1>
        <h4>
        SA.L.E.T. is for anyone who wants to create any kind of apps, software and websites. Whether you are a coder or non-coder, this platform is for all irrespective of your Background.
          </h4>
        <div className="sub-container">
          <div className="child2 grid-container">
            <Card heading="Happy" description="fruit" className="grid-item"/>
            <Card heading="Happy" description="fruit" className="grid-item"/>
            <Card heading="Happy" description="fruit" className="grid-item"/>
            <Card heading="Happy" description="fruit" className="grid-item"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SectionTwo