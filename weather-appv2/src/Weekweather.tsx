import { IForecast } from './App';
import Weather from './Weather';
import './Weekweather.css';

interface WeekweatherProps {
  forecast: IForecast | null;
}

const Weekweather: React.FC<WeekweatherProps> = ({ forecast }) => {
  return (
    <div className="Weekweather">
    {
      forecast ? forecast.list.map((weather) => (
        <Weather weather={weather}></Weather>
      )) : null
    }
    </div>
  );
}

export default Weekweather;
