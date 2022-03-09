import React from "react";
import '../App.css';
import DashMusic from '../dashboard/dashmusic';
import DashPlaces from '../dashboard/dashplaces';
import DashPeople from '../dashboard/dashpeople';
import PieCSongs from '../charts/piecsongs';

function DashPage() {
    return(
        <div>
            <h1 className="App-header">Dashboard</h1><br/><br/><br/>
            <div className="Content">
                <table>
                    <tr>
                        <td width='450px'><div className='DashBoard'><DashMusic /></div></td>
                        <td width='500px'><div className='DashBoard'><DashPeople /></div></td>
                        <td width='450px'><div className='DashBoard'><DashPlaces /></div></td>
                    </tr>
                </table>
            </div>
            <PieCSongs/>
        </div>
        
    );
}

export default DashPage;
