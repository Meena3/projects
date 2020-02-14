import React from 'react';
import './App.css';
import "weather-icons/css/weather-icons.css";
import Weather from "./components/Weather";

const apiKey = "15a164f939d14b43ba047c83d2d818b6";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city:"",
      country:""

    };
  this.getWeather();
  }
  getWeather = async () =>{
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&=apiid${apiKey}`);
    const response = await apiCall.json()
    console.log(response) 

  }

  render(){
    return (
      <div className="App">
        <Weather/>
      </div>
    );
  }
}

export default App;

