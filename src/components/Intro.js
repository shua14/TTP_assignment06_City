import React from "react"

export default function Intro() {
    return (
        <div className="intro">
            <h1>Welcome to City Search App</h1>
            <p>This React App utilizes the <a href="https://gist.github.com/ajLapid718/6abcbd05383b178d200ea00a09edd0bc">Zip and City Search API</a> to deliver its results.</p>
            <p>Enter the name of a U.S. City in the textbox above to try it out!</p>
        </div>
    )
}