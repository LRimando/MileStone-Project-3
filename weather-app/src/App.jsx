import React, {useState} from 'react' // import react and use a useState effect
import axios from 'axios' // import axios dependency for our API 

const App = () => {

  // const url = 'api url here'

  return (
    <div className = "app">
      <div className = "container">
        <div className = "top">
          <div className = "location">
             <p> Los Angeles </p>
          </div>
          <div className = "temp">
            <h1> 70 ºF</h1>
          <div className = "description">
            <p> cloudy </p>
          </div>
          </div>
        <div className = "bottom" >
          <div className = "feels like">
            <p> 67 ºF </p>
          </div>
          <div className = "humidity">
            <p> 20% </p>
          </div>
          <div className = "wind">
            5 MPH
          </div>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default App;

