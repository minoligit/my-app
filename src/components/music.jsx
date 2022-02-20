import React from "react";
import ReactDOM from "react-dom";
import songs from "../data/songs.json";

class Music extends React.Component{

    render(){

        const h1Style = {
            backgroundColor: "#4066b9",
            color: "white",
            height: "10vh",
            alignItems: "center"

        };
        const listStyle = {
            fontSize: "1.5em"
        };

        return(
         <div>
             <h1 style={h1Style}>My Music</h1>
             {songs.map((data,key)=>{
                 return (
                     <div key={key} style={listStyle}>
                         {data.id + " - " + data.name + " by " + data.artist}
                     </div>
                 );
             })}
         </div>
     );
    }
}


export default Music;