import React,{useEffect,useState} from 'react';
import Axios from 'axios';
import {Pie,PieChart,ResponsiveContainer,Tooltip,Legend} from "recharts";

function PieCPeople(){

    const [peopleList, setPeopleList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/selectAllPeople").then((res) => {
            setPeopleList(res.data);
            // console.log(res.data);
        });
    }, []); 

    return(
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={250} height={250} data={peopleList}>
                    <Pie dataKey={peopleList.Category} nameKey="Category" cx="50%" cy="50%" outerRadius={50} fill="#FF69B4" />
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}


export default PieCPeople;

