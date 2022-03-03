import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {Line,LineChart,YAxis,Legend,Tooltip,CartesianGrid,XAxis} from "recharts";

function ChartSongs(){

    const [songList, setSongList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/selectAllMusic").then((res) => {
            setSongList(res.data);
        });
    }, []); 

    return(
        <div>
             <LineChart width={1400} height={600} data={songList}>
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
    );
}


export default ChartSongs;

