import { IWeather } from './App';
import Currday from './Currday';
import './Weather.css';

interface WeatherProps {
  weather: IWeather | null;
}

const Weather: React.FC<WeatherProps> = ({ weather }) => {
  return (
    <div className="Weather">
      <Currday date={weather ? new Date(weather.dt * 1000) : new Date()} />
      <div className="Temperature">{weather ? weather.main.temp : ''}&#x2103;</div>
      <div className="Precipitation">{weather ? weather.weather[0].main : ''}</div>
      <div className="Wind">Ветер: {weather ? weather.wind.speed : ''} m/s</div>
    </div>
  );
}

export default Weather;
