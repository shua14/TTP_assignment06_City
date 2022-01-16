import './App.css';
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          City Search App
        </h1>
      </header>
      
      <div className="text-field">
        {/* <label type="city"><strong>City:</strong></label> */}
        <input type="text" id="city" name="zipCode" placeholder='Try "Brooklyn"'></input>
      </div>
      <Search />
    </div>
  );
}

export default App;
