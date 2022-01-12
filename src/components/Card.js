import React from 'react'

export default function Card (props) {

    const city = props.info

    return (
        // simple card component - renders a div with the information, as shown in the example
        <div className='card'>
            <h1>{`${city.LocationText}`}</h1>
            <ul>
                <li>{`State: ${city.State}`}</li>
                <li>{`Location: (${city.Lat}, ${city.Long})`}</li>
                <li>{`Population (estimated): ${city.EstimatedPopulation ? city.EstimatedPopulation : "No data"}`}</li>
                <li>{`Total Wages: ${city.TotalWages ? city.TotalWages : "No data"}`}</li>
            </ul>
        </div>
    )
} 