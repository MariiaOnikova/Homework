import './SearchBar.css';

function SearchBar() {
  return (
    <div className="SearchBar">
      <label for="city">Ваш город: </label>
      <input type="text"></input>
    </div>
  );
}

export default SearchBar;
