import React from 'react'
import loading from '../img/loading.gif'

export default function Card () {
    return (
        <div className='loading'>
            <h1>Please Wait While We Fetch City Data :)</h1>
            <img src={loading} alt="loading..." />
        </div>
    )
} 