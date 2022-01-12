import React from 'react'

export default function Card (props) {

    const city = props.info
    
    return (
        // simple card component - renders a div with the information, as shown in the example
        <div className='card'>
            <div className= "topLine">
                <h2>{city.LocationText}</h2>
            </div>
            <ul>
                <li>State: {city.State}</li>
                <li>Location: ({city.Lat}, {city.Long})</li>
                <li>Population (estimated): {city.EstimatedPopulation ? city.EstimatedPopulation : "No data"}</li>
                <li>Total Wages: {city.TotalWages ? city.TotalWages : "No data"}</li>
            </ul>
        </div>
    )
} 