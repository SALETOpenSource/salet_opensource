import React from "react";
import Card from "../../Card/Card";
import vector1 from "../../../images/vector1.svg";

const SectionOne = () => {
  return (
    <>
      <div className="section-container">
      <p className='small-text'>Create AI generated Softwares</p>
        <h1>Why are we creating it?</h1>
        <h4>
        Unlike a typical No-Code Platform, SA.L.E.T. is available to anyone who wants to completely Automate the the Software Development Life Cycle.
        </h4>
        <div className="sub-container">
          <div className="child1">
            <img src={vector1} alt="Vector 1" />
          </div>
          <div className="child2 grid-container">
            <Card heading="Automate all phases of Software Development Life Cycle" description="Designing, Building, Testing, and Deploying of your Softwares" className="grid-item"/>
            <Card heading="Create Softwares in just a few clicks" description="Write your prompt and get a complete automated software" className="grid-item"/>
            <Card heading="Available for all Languages" description="HTML, CSS,C#, JavaScript, Go, Perl, PHP, Ruby, Swift, TypeScript, SQL, and many more" className="grid-item"/>
            <Card heading="Creation of CI/CD cycle" description="Combining modern language models based on the Transformer Neural Network (TNN) with development frameworks and SDKs " className="grid-item"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
