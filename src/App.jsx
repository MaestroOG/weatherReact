import React, { useState } from 'react'
import './App.css'

function App() {
  const [searchVal, setSearchVal] = useState("")
  const [data, setData] = useState([]);

  const url = "https://api.openweathermap.org/data/2.5/weather?q=";
  const secondHalfOfUrl = "&units=metric&appid=" //Use the API Key when changing the code next time

  const handleChange = (event) => {
    setSearchVal(event.target.value)
  }

  const handleClick = async () => {
    const response = await fetch(url + searchVal + secondHalfOfUrl);
    let data = await response.json()
    setData(data);
    console.log(data.status);
    console.log("Clicked");
  }

  return (
    <>
      <div className="container">
        <div className="search">
          <input type="text" placeholder='Search for city' onChange={handleChange} />
          <button onClick={handleClick}>Search</button>
        </div>
        {
          data.hasOwnProperty("weather") ? (
            <div className="card">
              <h1>{data.name}</h1>
              <p>Temperature: {Math.floor(data.main.temp)}°C</p>
              <p>Feels like: {Math.floor(data.main.feels_like)}°C</p>
              <p>Humdity: {data.main.humidity}%</p>
              <p>Wind Speed: {data.wind.speed}km/h</p>

            </div>
          ) :
            (
              <p>Weather details will appear here</p>
            )
        }
      </div>
    </>
  )
}

export default App
