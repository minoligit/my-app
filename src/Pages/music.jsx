import React from "react";
import '../App.css';
import ChartSongs from "../charts/chartsongs";

function Music (){

    return(
     <div>
        <h1 className='App-header'>My App - My Music</h1><br/>
        <div className="Content">
            <br/><br/><ChartSongs/>
            <table>
                <tr>
                    <td></td>
                </tr>
            </table>
        </div>
     </div>
    );
}



export default Music;