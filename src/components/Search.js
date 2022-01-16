import React, { useEffect, useState } from "react";
import Loading from "./Loading"
import CityCard from "./CityCard";

export default function Search() {
    // Main function component, responsible for rendering cards depending on the value in the search box
    const [cards, setCards] = useState("");
    const [loading, setLoading] = useState(false);
    let searchText; 
    // To avoid rerendering ad inifinitum we wrap the fetch cycle in useEffect()
    useEffect(() => {
        searchText = document.getElementById('city');
        // fetching on every keyup can be cumbersome, here's a 1 second debounce
        searchText.addEventListener('keyup', debounce(async () => {
           await keyupHandler();
        }, 1000))
    }, []);

    function debounce(callback, wait) {
        // https://chrisboakes.com/how-a-javascript-debounce-function-works/
        let timeout;
        return (...args) => {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => callback.apply(context, args), wait);
        };
    }
    
    async function keyupHandler () {
        const enteredCity = searchText.value;
        if (enteredCity.length > 22 || enteredCity.length === 0) {
            // avoid API calls when they're bound to fail
            // https://worldpopulationreview.com/world-city-rankings/longest-city-names
            setCards(<h1>Not a City</h1>);
        } else {
            // API calls
            // Some 404 Error Handling to avoid trying to parse "Not Found" as JSON 
            try {
                // first fetch - all the zipcodes returned from the city query:
                const res = await fetch("https://ctp-zip-api.herokuapp.com/city/" + (enteredCity).toUpperCase());
                const allZips = await res.json();
                if (allZips.length > 10) {
                    // might take a while (10 is probably a bit on the conservative side though)
                    setLoading(true);
                }
                // zipFetcher fetches an array of city objects that match the city name from the search input
                const cities = await zipFetcher(allZips, enteredCity);
                // we now have all the data - time to organize
                const byState = cityOrganizer(cities);
                const states = Object.keys(byState).sort();
                // ready to render the city cards
                setCards(states.map((x) => <CityCard key={byState[x].RecordNumber} data={byState[x]} />));
                setLoading(false);
            } catch {
                // 404
                setCards(<h1>Not Found</h1>)
            }
        }
    }

    async function zipFetcher (allZips, city) {
        // for each zipcode returned from the city endpoint,
        // fetches and filters city data obtained from its zip endpoint,
        // discarding city data of received entries not matching the query
        const cities = [];
        for (let i = 0; i < allZips.length; i++){
            // presumably every zipcode coming from the city endpoint will be in the zip endpoint?
            const res = await fetch("https://ctp-zip-api.herokuapp.com/zip/" + allZips[i]);
            const cityData = await res.json();
            for (let i in cityData) {
                if (cityData[i].City.toLowerCase() === city.toLowerCase()) {
                    cities.push(cityData[i]);
                }
            }
        }
        return cities;
    }

    function cityOrganizer (cities) {
        // input: array of city objects that match the search term
        // output: an object of State : City Object pairs
        // City Objects (i.e., for each city, the total of all zipcodes corresponding to the search term city)
        // have their population and wages values summed in the final object and all zipcodes are put into one array property
        const byState = {};
        for (let i = 0; i < cities.length; i++) {
            if (byState[cities[i].State]) {
                byState[cities[i].State].Zips.push(", " + cities[i].Zipcode);
                byState[cities[i].State].TotalPop += Number(cities[i].EstimatedPopulation);
                byState[cities[i].State].Wages += Number(cities[i].TotalWages);
            } else {
                byState[cities[i].State] = cities[i];
                byState[cities[i].State].Zips = [cities[i].Zipcode]
                byState[cities[i].State].TotalPop = Number(cities[i].EstimatedPopulation);
                byState[cities[i].State].Wages = Number(cities[i].TotalWages);
            }
        }
        return byState;
    }

    return (
        <div className="cards">
            {loading ? <Loading /> : cards}
        </div>
    )
}