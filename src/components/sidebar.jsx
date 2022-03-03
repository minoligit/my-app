import React from "react";
import '../App.css';
// import defaultuser from '../images/defaultuser.png';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';


function SideBar() {

    const linkStyle1 = {
        backgroundColor: "#4066b9",
        padding: "10px 40px",
        textDecoration: "none"
    };

    return(
        <div className="Content">
            {/* <img src={defaultuser} alt="User" width="70%" height="70%"/> */}
            <Link to={"../Pages/dashpage"} className='linkStyle1'>Dashboard</Link><br/><br/>
            <input/><SearchIcon />
        </div>
    );
}

export default SideBar;