import React, {useState, useEffect} from "react";
import Axios from "axios";
import './dashboard.css';

function DashMusic(){

    const [popularSongs1, setPopularSongs1] = useState([]);
    const [popularSongs2, setPopularSongs2] = useState([]);
    const [popularSongs3, setPopularSongs3] = useState([]);
    const [mode0, setMode0] = useState([]);
    const [mode1, setMode1] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/popularSongs1").then((res) => {
            setPopularSongs1(res.data);
        });
        Axios.get("http://localhost:8080/popularSongs2").then((res) => {
            setPopularSongs2(res.data);
        });
        Axios.get("http://localhost:8080/popularSongs3").then((res) => {
            setPopularSongs3(res.data);
        });
        Axios.get("http://localhost:8080/mode0").then((res) => {
            setMode0(res.data);
        });
        Axios.get("http://localhost:8080/mode1").then((res) => {
            setMode1(res.data);
        });
    }, []);
    
    return(
        <div>
            <div id="dashHead">My Music</div>
            <section id="section1">
                <h3>Popularity</h3>
                {popularSongs1.map(data => (
                    <div><label>Level 1 -</label>{data.Count1}<br/><br/></div>
                ))}
                {popularSongs2.map(data => (
                    <div><label>Level 2 -</label>{data.Count2}<br/><br/></div>
                ))}
                {popularSongs3.map(data => (
                    <div><label>Level 3 -</label>{data.Count3}<br/><br/></div>
                ))}
            </section>
            <section id="section2">
                <h3>Mode</h3>
                {mode0.map(data => (
                    <div><label>Mode 0 -</label>{data.Mode0}<br/><br/></div>
                ))}
                {mode1.map(data => (
                    <div><label>Mode 1 -</label>{data.Mode1}<br/><br/></div>
                ))}
            </section>    
        </div>
    );
};

export default DashMusic;