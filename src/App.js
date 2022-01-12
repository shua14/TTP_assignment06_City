import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  const city =  {
    City: "New York",
    State: "NY",
    Lat: 45,
    Long: 12,
    EstimatedPopulation: 1234,
    TotalWages: 1234
  }
  
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
      <Card props={city}/> 
    </div>
  );
}

export default App;
