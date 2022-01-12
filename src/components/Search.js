import React, { useEffect, useState } from "react";
import Card from "./Card"

export default function Search() {
    const [cards, setCards] = useState("");
    let searchText; 
    useEffect(() => {
        searchText = document.getElementById('zipCode');
        searchText.addEventListener('keyup', () => {
            if (searchText.value.length !== 5 || !Number(searchText.value)) {
                setCards(<h1>Not a zipcode</h1>);
            } else {
                fetch("https://ctp-zip-api.herokuapp.com/zip/" + searchText.value)
                .then(res => res.json())
                .then(data => {
                    setCards(data.map((x) => <Card key={x.RecordNumber} info={x}/>));
                })
            }
        })
    }, []);
    return (
        <div className="cards">
            {cards}
        </div>
    )
}