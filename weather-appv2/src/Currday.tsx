import './Currday.css';

interface CurrdayProps {
  date: Date;
}

const Currday: React.FC<CurrdayProps> = ({ date }) => {
  return (
    <div className="Currday">
      <div className="DayOfWeek">Погода на {date.toLocaleString()}&#x2c;</div>
    </div>
  );
}

export default Currday;
