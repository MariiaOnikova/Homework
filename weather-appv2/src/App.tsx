
import './App.css';

import SearchBar from './SearchBar'
import Location from './Location'
import Currday from './Currday'
import Weather from './Weather'
import Weekweather from './Weekweather'

import { useEffect, useState } from "react";

export interface ICity {
  lat: number;
  lon: number;
  local_names: {
    ru: string;
  };
}

export interface IWeather {
  weather: {
    main: string
  }[],
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  },
  wind: {
    speed: number
  },
  dt: number
}
export interface IForecast {
  list: IWeather[]
}


function App() {
  const [city, setCity] = useState<ICity | null>(null);
  const [query, setQuery] = useState(''); 

  const [weather, setWeather] = useState<IWeather | null>(null);

  const [forecast, setForecast] = useState<IForecast | null>(null);
  


  useEffect(() => {
    if (!query) { return; }
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=b473568b95d26e4dce55cc797f52fdbc`)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        if (result.length > 0) {
          setCity(result[0]);
        } else {
          setCity(null);
        }
      });
  }, [query]);

  useEffect(() => {
    if (!city) { return; }
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=b473568b95d26e4dce55cc797f52fdbc&units=metric`)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        setWeather(result);
      });
  }, [city]);

  useEffect(() => {
    if (!city) { return; }
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&appid=b473568b95d26e4dce55cc797f52fdbc&units=metric`)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        setForecast(result);
      });
  }, [city]);

  return (
    <div className="App">
      <SearchBar query={query} queryChange={event => setQuery(event)} />
      <Location city={city} />
      <div className="Container">
        <Weather weather={weather} />
        <Weekweather forecast={forecast}/>
      </div>
    </div>
  );
}

export default App;
