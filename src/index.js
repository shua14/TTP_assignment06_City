import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './components/Card';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

const city = {
  City: "New York",
  State: "NY",
  Lat: 45,
  Long: 12,
  EstimatedPopulation: 1234,
  TotalWages: 1234
}


ReactDOM.render(
  <Card props={city}/>,
  document.getElementById('card')
);
