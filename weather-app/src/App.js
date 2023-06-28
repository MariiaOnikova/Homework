import SearchBar from './SearchBar';
import Currday from './Currday';
import Location from './Location';
import Weather from './Weather';
import Weekweather from './Weekweather';


import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Location/>
      <div className="Container">
        <Currday/>
        <Weather/>
        <Weekweather/>
      </div>
    </div>
    
  );
}

export default App;
