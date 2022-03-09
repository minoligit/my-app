import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import './charts.css';
import {Line,LineChart,YAxis,Legend,Tooltip,CartesianGrid,XAxis} from "recharts";

function ChartSongs(){

    const [songList, setSongList] = useState([]);
    const [songView, setSongView] = useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8080/selectAllMusic").then((res) => {
            setSongList(res.data);
        });
    }, []);
    const viewMusic = (value) => {
        const str = {
            songid: value
        }
        Axios.post("http://localhost:8080/viewMusic",str).then((res) => {
            setSongView(res.data);
            console.log(res.data);
        });
    }; 

    return(
        <div>
            <div>
             <LineChart width={1400} height={600} data={songList} onClick={()=>viewMusic(songList.songId)}>
               <CartesianGrid strokeDasharray="3 3" stroke='#808080'/>
               <XAxis dataKey={songList.songId} domain={[1,'dataMax+1']} interval={24999} stroke='#000000'/>
               <YAxis domain={[0,1]} stroke='#000000'/>
               <Tooltip />
               <Legend />
      
               <Line dataKey="valence" name="Valence" key="valence" dot={false} stroke='#FF69B4'/>
               <Line dataKey="acousticness" name="Acousticness" key="acousticness" dot={false} stroke='#228B22'/>
               <Line dataKey="danceability" name="Danceability" key="danceability" dot={false} stroke='#4169E1'/>
             </LineChart>
            </div>
            <div>
                {songView.map(data => (
                    <div>{"Song Id : "+data.songId}<br/>{data.year}<br/>{data.artists}<br/>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default ChartSongs;

