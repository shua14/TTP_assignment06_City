import React from 'react'
import states from './states'

export default function CityCard (props) {

    const city = props.data

    return (
        // simple card component - renders a div with the information, as shown in the example
        <div className='card'>
            <div className= "topLine">
                <h2>{city.LocationText}</h2>
            </div>
            <ul>
                <li>State: {states[city.State]}</li>
                <li>Zipcode(s): {city.Zips}</li>
                <li>Location: ({city.Lat}, {city.Long})</li>
                <li>Population (estimated): {city.TotalPop ? city.TotalPop : "No data"}</li>
                <li>Total Wages: {city.Wages ? city.Wages : "No data"}</li>
            </ul>
        </div>
    )
} 