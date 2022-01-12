import React, { useEffect, useState } from "react";
import Card from "./Card"

export default function Search() {
    // Main function component, responsible for rendering cards depending on the value in the search box
    const [cards, setCards] = useState("");
    let searchText; 
    useEffect(() => {
        // To avoid rerendering ad inifinitum we wrap the fetch cycle in useEffect()
        searchText = document.getElementById('zipCode');
        searchText.addEventListener('keyup', () => {
            // 'fancy' responsing to each key entered
            if (searchText.value.length !== 5 || !Number(searchText.value)) {
                // avoid API calls when they're bound to fail
                setCards(<h1>Not a Zipcode</h1>);
            } else {
                // API call
                fetch("https://ctp-zip-api.herokuapp.com/zip/" + searchText.value)
                    .then(async (res) => {
                        // Some 404 Error Handling to avoid trying to parse "Not Found" as JSON 
                        if (res.ok) {
                            // no 404 - data -is- returned
                            res = await res.json();
                            // Search component renders cards with data from the API passed as props
                            setCards(res.map((x) => <Card key={x.RecordNumber} info={x}/>));
                        } else {
                            setCards(<h1>Not Found</h1>)
                        }
                    })
                    .catch(e => console.log('Connection error', e))
            } // close else branch
        }) // close event listener
    }, []); // close useEffect()
    return (
        <div className="cards">
            {cards}
        </div>
    )
}