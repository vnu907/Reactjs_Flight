import React from 'react'


import gridImage from '../../assets/GridImage.jpg'

const Support =() =>{
  return(
    <div className="support container section">
      <div className="sectionContainer">
        <div className="tittleDiv">
          <small>Travel support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans , see what to expect</p>

        </div>

        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div className="singleInfo">
              <span className="number">01</span>
           <h4>Travel Requirements</h4>
            <p>Find help with booking and travel plans</p>
            </div>

            <div className="singleInfo">
              <span className="number">02</span>
           <h4>Travel Requirements</h4>
            <p>Find help with booking and travel plans</p>
            </div>

            <div className="singleInfo">
              <span className="number">03</span>
           <h4>Travel Requirements</h4>
            <p>Find help with booking and travel plans</p>
            </div>
          </div>
       <div className="imgDiv">
        <img src={gridImage}/>
       </div> 


       </div>
      </div>
    </div>
  )
}

export default Support