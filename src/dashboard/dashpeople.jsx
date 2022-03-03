import React, {useState, useEffect} from "react";
import Axios from "axios";
import './dashboard.css';

function DashPeople(){

    // const [popularPeople, setPopularPeople] = useState([]);
    const [richPeople, setRichPeople] = useState([]);

    useEffect(() => {
        // Axios.get("http://localhost:8080/popularPeople").then((res) => {
        //     setPopularPeople(res.data);
        // });
        Axios.get("http://localhost:8080/richPeople").then((res) => {
            setRichPeople(res.data);
        });
    }, []);
    
    return(
        <div>
            <div id="dashHead">My Music</div>
            <section id="section1">
                <h3>Popularity</h3>
                {/* {popularPeople.slice(0,3).map(data => (
                    <div>{popularPeople.indexOf(data.place)+" - "+data.place}<br/><br/></div>
                ))} */}
            </section>
            <section id="section2">
                <h3>Mode</h3>
                {richPeople.slice(0,3).map(data => (
                    <div>{richPeople.indexOf(data.Name)+" - "+data.Name+" "+data.Worth_USD}<br/><br/></div>
                ))}
            </section>    
        </div>
    );
};

export default DashPeople;