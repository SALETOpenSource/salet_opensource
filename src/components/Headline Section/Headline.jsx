import React from 'react'
import "./Headline.css";
import heroImg from '../../images/bg2.jpg';

const Headline = () => {
  return (
    <>
        <div className='headline-container container'>
        
            
       
            <img src={heroImg}/>
            <div className="left-positioned">
            <h1>Anybody can create any type of software with the help of SA.L.E.T. </h1>
            <p>Our AI system that translates natural language to code. Integrating development frameworks & SDKs with modern Language Models based on Transformer Neural Network (TNN)</p>
            </div>
            
        
        
        </div>
    </>
  )
}

export default Headline