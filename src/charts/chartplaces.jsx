import React,{useEffect,useState} from 'react';
import '../App.css';
import './charts.css';
import {Line,LineChart,YAxis,Legend,Tooltip,CartesianGrid,XAxis} from "recharts";

function ChartPlaces(){

    const [placesList, setPlacesList] = useState([]);  //[curent value,function to update]
    const [placeId, setPlaceId] = useState("");

    useEffect( () =>{
        fetchPlaces();
    }, []);

    const fetchPlaces = async() => {
        try{
            const place = await fetch('/selectAllPlaces');
            const data = await place.json();
            setPlacesList(data);
        } catch (error) {
            console.log("error", error);
        }
    }

    return(
        <div id='charts'>
            <table>
                <tr>
                    <td>
                        <div>
                            <LineChart width={1000} height={500} data={placesList}>
                            <CartesianGrid strokeDasharray="3 3" stroke='#808080'/>
                            <XAxis dataKey={placesList.id} domain={[1,'dataMax+3']} interval={1} stroke='#000000' onClick={(e)=>{setPlaceId(e.target.value)}}/>
                            <YAxis domain={[0,10000]} stroke='#000000'/>
                            <Tooltip />
                            <Legend />
                    
                            <Line type="monotone" dataKey="views" name="Views" key="views" dot={false} stroke='#FF69B4'/>
                            <Line type="monotone" dataKey="reactions" name="Reactions" key="reactions" dot={false} stroke='#228B22'/>
                            <Line type="monotone" dataKey="comments" name="Comments" key="comments" dot={false} stroke='#4169E1'/>
                            </LineChart>
                        </div>
                    </td>
                    <td>
                        <div>

                        </div>
                    </td>
                </tr>
            </table>
        </div>
        
    );
}


export default ChartPlaces;

