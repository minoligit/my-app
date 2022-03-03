import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {Pie,PieChart,Tooltip} from "recharts";

function PieCSongs(){

    const [songList, setSongList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/selectAllMusic").then((res) => {
            setSongList(res.data);
            console.log(res.data);
        });
    }, []); 

    return(
        <div>
             <PieChart width={730} height={250}>
                <Pie data={songList} dataKey="key" nameKey="Key" cx="50%" cy="50%" outerRadius={50} fill="#FF69B4" />
                <Pie data={songList} dataKey="year" nameKey="Year" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fill="#228B22" />
                <Pie data={songList} dataKey="popularity" nameKey="Popularity" cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#4169E1" />
                <Tooltip />
            </PieChart>
        </div>
    );
}


export default PieCSongs;

