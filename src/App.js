import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Zip Code App
        </h1>
      </header>
      
      <div className="text-field">
        <label for="zipCode"><strong>Zip Code:</strong></label>
        <input type="text" id="zipCode" name="zipCode"></input>
      </div>
    </div>
  );
}

export default App;
