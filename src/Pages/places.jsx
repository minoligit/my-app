import React, {useEffect, useState} from "react";
import '../App.css';
import ChartPlaces from '../charts/chartplaces';

function Places(){

    const [placesList, setPlacesList] = useState([]);  //[curent value,function to update]

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
        <div>
            <h1 className='App-header'>My App - My Places</h1><br/>
            <div className="Content">
                <br/><br/><ChartPlaces/>
                <table>
                    <tr>
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>
     );
}

export default Places;