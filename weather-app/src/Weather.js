import './Weather.css';

function Weather() {
  return (
    <div className="Weather">
      <div className="Temperature">Температура</div>
      <div className="Precipitation">Осадки</div>
      <div className="Wind">Ветер</div>
      <div className="WaterTemp">Температура воды</div>
      <div className="AtmosphericPress">Давление</div>
    </div>
  );
}

export default Weather;
