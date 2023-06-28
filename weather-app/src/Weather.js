import './Weather.css';

function Weather() {
  return (
    <div className="Weather">
      <div className="Temperature">28&#x2103;/81F</div>
      <div className="Precipitation">Осадки: 3мм &#x2602;</div>
      <div className="Wind">Ветер: СВ&#x2197; 3м/с</div>
    </div>
  );
}

export default Weather;
