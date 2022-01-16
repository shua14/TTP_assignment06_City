import React from 'react'
import states from './states'

export default function CityCard (props) {

    const city = props.data
    let wages;
    
    return (
        // simple card component - renders a div with the information, as shown in the example
        <div className='card'>
            <div className= "topLine">
                <h2>{city.LocationText}</h2>
            </div>
            <ul>
                <li><strong>State:</strong> {states[city.State]}</li>
                <li><strong>Zipcode(s):</strong> {city.Zips}</li>
                <li><strong>Location:</strong> ({city.Lat}, {city.Long})</li>
                <li><strong>Population (est.):</strong> {city.TotalPop ? city.TotalPop : "No data"}</li>
                <li><strong>Total Wages (est.):</strong> {city.Wages ? '$'+city.Wages.toLocaleString() : "No data"}</li>
            </ul>
        </div>
    )
} 