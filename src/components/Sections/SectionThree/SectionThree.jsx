import React from 'react'
import Card from '../../Card/Card'

const SectionThree = () => {
  return (
    <>
      <div className="section-container">
        <h1>Work with Us</h1>
        <h4>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
          distinctio velit quis debitis, voluptatem sint eius molestiae
          architecto dolore tempora facilis nemo blanditiis voluptas maiores
          quidem fuga rerum praesentium reprehenderit.
        </h4>
        <div className="sub-container">
          <div className="child1">
            <img src="" alt="" />
          </div>
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


export default SectionThree