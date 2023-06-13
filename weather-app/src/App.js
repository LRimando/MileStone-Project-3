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
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'a617587166ac4dabbad3327dd6510684';
      const url = 'http://api.weatherbit.io/v2.0/current'
    }
      //search function to connect to API 
  const searchLocation = (event) => {
    if (event.key === 'Enter') { // Even.key used to submit our input in an enter button 
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    }
  
      /* try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

      fetchData();
  }, []);
 */

  return (
    <div className = "app">
      <div className = "search">
        <input 
        value = {location}
        onChange = {event => setLocation(event.target.value)}
        placeholder = 'Enter Location'
        onKeyDown = {searchLocation} //use keyDown to run function since theres no button 
        type = "text"/>
      <div className = "container">
        <div className = "top">
          <div className = "location">
             <p>{`${weatherData.city_name}, ${weatherData.state_code}, ${weatherData.country_code}`} </p>
          </div>
          <div className = "temp">
            <h1> {weatherData.temp} ºF</h1>
          <div className = "clouds">
            <p> {weatherData.clouds} % </p>
          </div>
          </div>
        <div className = "bottom" >
          <div className = "feels like">
            <p> Feels like: {weatherData.app_temp} ºF </p>
          </div>
          <div className = "humidity">
            <p> Humidity: {weatherData.rh}% </p>
          </div>
          <div className = "wind">
            Wind: {weatherData.wind_spd} m/s, {weatherData.wind_cdir_full}
          </div>
          </div>
        </div>
      </div>
        <p>Scanning Skies...</p>
      )
    </div>
    </div>
  );
};
  })
export default App;