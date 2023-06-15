import React, {useEffect, useState} from 'react'; // import react and use a useState effect
import axios from 'axios'; // import axios dependency for our API 
import Search from './components/search/search';
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import './App.css';
import '.App.js';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('') // another state needed to find current location 
}

  // api url here
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=ac647493ae56957ba5c10c969f967bec`//${} this is the dynamic value we will be passing
      
  //search function to connect to API 
  const searchLocation = (event) => {
    if (event.key === 'Enter') { // Even.key used to submit our input in an enter button 
      axios.get(url).then((response) => { //response will be passed through arrow function 
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }
  
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          onKeyDown={searchLocation}
          type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{weatherData?.name}</p>
          </div>
          <div className="temp">
            {weatherData?.main ? <h1>{weatherData.main.temp}°F</h1> : null}
          </div>
          <div className="clouds">
            {weatherData?.weather ? <p>{weatherData.weather[0].main}</p> : null}
          </div>
        </div>
      </div>
      {weatherData?.name !== undefined && (
        <div className="bottom">
          <div className="feels like">
            {weatherData?.main ? (
              <p className="bold">{weatherData.main.feels_like}</p>
            ) : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {weatherData?.main ? (
              <p className="bold">{weatherData.main.humidity}</p>
            ) : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
            {weatherData?.wind ? (
              <p className="bold">{weatherData.wind.speed} MPH</p>
            ) : null}
            <p>Wind Speed</p>
          </div>
        </div>
      )}
    </div>
  );
  

export default App;