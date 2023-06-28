import './Weekweather.css';

function Weekweather() {
  return (
    <div className="Weekweather">
    <div className="Nextday">
      <div classname="DayTemp">
          <div classname="Dayofweek">Thursday</div>
          <div classname="Temperature" >28&#x2103;/81F</div>
      </div>
      <div classname="Precipitation">Дощь</div>
    </div>
      <div className="Nextday">
        <div classname="DayTemp">
            <div classname="Dayofweek">Friday</div>
            <div classname="Temperature" >28&#x2103;/81F</div>
        </div>
        <div classname="Precipitation">Солнышко</div>
      </div>
      <div className="Nextday">
        <div classname="DayTemp">
            <div classname="Dayofweek">Saturday</div>
            <div classname="Temperature" >28&#x2103;/81F</div>
        </div>
        <div classname="Precipitation">Уграган</div>
      </div>
      <div className="Nextday">
        <div classname="DayTemp">
            <div classname="Dayofweek">Sunday</div>
            <div classname="Temperature" >28&#x2103;/81F</div>
        </div>
        <div classname="Precipitation">Дощь</div>
      </div>
      <div className="Nextday">
        <div classname="DayTemp">
            <div classname="Dayofweek">Monday</div>
            <div classname="Temperature" >28&#x2103;/81F</div>
        </div>
        <div classname="Precipitation">Дощь</div>
      </div>
      <div className="Nextday">
        <div classname="DayTemp">
            <div classname="Dayofweek">Tuesday</div>
            <div classname="Temperature" >28&#x2103;/81F</div>
        </div>
        <div classname="Precipitation">Дощь</div>
      </div>
    </div>
  );
}

export default Weekweather;
