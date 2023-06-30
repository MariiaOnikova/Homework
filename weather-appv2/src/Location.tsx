import { ICity } from './App';
import './Location.css';


interface LocationProps {
  city: ICity | null;
}

const Location: React.FC<LocationProps> = ({ city }) => {
  return (
    <div className="Location">
      <h1>Погода в городе {city ? city.local_names.ru : ''}</h1>
    </div>
  );
}

export default Location;
