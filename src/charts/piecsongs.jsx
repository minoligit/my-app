import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {Pie,PieChart,ResponsiveContainer,Tooltip,Legend} from "recharts";

function PieCSongs(){

    const [songList, setSongList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/selectAllMusic").then((res) => {
            setSongList(res.data);
            // console.log(res.data);
        });
    }, []); 

    return(
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={250} height={250} data={songList}>
                    <Pie dataKey="key" nameKey="Key" cx="50%" cy="50%" outerRadius={50} fill="#FF69B4" />
                    <Pie dataKey="year" nameKey="Year" cx="50%" cy="50%" innerRadius={60} outerRadius={70} fill="#228B22" />
                    {/* <Pie data={songList} dataKey="popularity" nameKey="Popularity" cx="50%" cy="50%" innerRadius={80} outerRadius={90} fill="#4169E1" /> */}
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}


export default PieCSongs;

