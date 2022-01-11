import React from 'react'

export default function Card (props) {
    const city = props.info;
    return (
        <>
            <h1>{`${city.City}, ${city.State}`}</h1>
            <ul>
                <li>{`State: ${city.State}`}</li>
                <li>{`Location: (${city.Lat}, ${city.Long})`}</li>
                <li>{`Population: Estimated:${city.EstimatedPopulation}`}</li>
                <li>{`Total Wages: ${city.TotalWages}`}</li>
            </ul>
        </>
    )
} 