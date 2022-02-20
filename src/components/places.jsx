import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";

function Places(){

        const h1Style = {
            backgroundColor: "#4066b9",
            color: "white",
            height: "10vh",
            alignItems: "center"
        };

        useEffect( () =>{
            fetchItems();
        }, []);

        const [items, setItems] = useState([]);
        const fetchItems = async() => {
            const data = await fetch('/places');
            const items = await data.json();
            setItems(items);
        }

        return(
         <div>
             <h1 style={h1Style}>My Places</h1>
             {
                 items.map(item => (
                     <div>{item.id + " - " + item.place + " by " + item.address}</div>
                 ))
             }
         </div>
     );
}


export default Places;