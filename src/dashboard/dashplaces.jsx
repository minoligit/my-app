import React, {useState, useEffect} from "react";
import './dashboard.css';

function DashPlaces(){

    const [mostViewed, setMostViewed] = useState([]);
    const [mostReacted, setMostReacted] = useState([]);

    useEffect( () =>{
        fetchPlaces();
    }, []);

    const fetchPlaces = async() => {
        try{
            const placeV = await fetch('/mostViewed');
            const dataV = await placeV.json();
            setMostViewed(dataV);

            const placeR = await fetch('/mostReacted');
            const dataR = await placeR.json();
            setMostReacted(dataR);

        } catch (error) {
            console.log("error", error);
        }
    }
    
    return(
        <div>
            <div id="dashHead">My Places</div>
            <section id="section1">
                <h3>Most Viewed</h3>
                {mostViewed.slice(0,3).map(data => (
                    <div>{mostViewed.indexOf(data.place)+" - "+data.place}<br/><br/></div>
                ))}
            
            </section>
            <section id="section2">
                <h3>Most Reacted</h3>
                {mostReacted.slice(0,3).map(data => (
                    <div>{mostReacted.indexOf(data.place)+" - "+data.place}<br/><br/></div>
                ))}
                
            </section>    
        </div>
    );
};

export default DashPlaces;