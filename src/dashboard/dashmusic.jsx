import React, {useState, useEffect} from "react";
import Axios from "axios";
import './dashboard.css';

function DashMusic(){

    const [popularSongs, setPopularSongs] = useState([]);
    const [mode, setMode] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/popularSongs").then((res) => {
            setPopularSongs(res.data);
        });
        Axios.get("http://localhost:8080/mode").then((res) => {
            setMode(res.data);
        });
        
    }, []);
    
    return(
        <div>
            <div id="dashHead">My Music</div>
            <section id="section1">
                <h3>Popularity</h3>
                {popularSongs.slice(1,4).map(data => (
                    <div>
                        <div>{"Level "+popularSongs.indexOf(data.count)+" - "+data.count}<br/><br/></div>
                    </div>
                ))}
                
            </section>
            <section id="section2">
                <h3>Mode</h3>
                {mode.map(data => (
                    <div>
                        <div>{"Mode "+mode.indexOf(data.count)+" - "+data.count}<br/><br/></div>
                    </div>
                ))}
            </section>    
        </div>
    );
};

export default DashMusic;