import React from 'react'

export default function Card (props) {

    const zip = props.info
    
    return (
        // simple card component - renders a div with the information, as shown in the example
        <div className='card'>
                <h2>{zip}</h2>
            
        </div>
    )
} 