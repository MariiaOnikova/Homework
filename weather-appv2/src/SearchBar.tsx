import './SearchBar.css';
import {useEffect, useState} from "react";

interface SearchBarProps{
  query: string,
  queryChange: (arg0: string)=>void
}

const SearchBar:React.FC<SearchBarProps> =  ({query, queryChange}) => {
  const [localQuery, setLocalQuery] = useState('');
  useEffect(() => {
    setLocalQuery(query);
  }, [query]);
  return (
    <div className="SearchBar">
      <label>Ваш город: </label>
        <input type="text" id="search" value={localQuery} onChange={event => setLocalQuery(event.target.value)}></input>
        <button type="button" onClick={() => queryChange(localQuery)}>Поиск</button>
    </div>
  );
}

export default SearchBar;
