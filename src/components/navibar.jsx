import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

class NaviBar extends React.Component {

    render(){

        return (
            <div>
                {this.renderList()}
            </div>
        )
    }

    renderList(){
        const uListStyle = {
            listStyle: "none",
        };
        const listStyle = {
            display: "inline",
            padding: "10px 40px",
            color: "white"
        };
        
        return <ul style={uListStyle}>
                    <li style={listStyle}><HomeIcon /></li>
                    <li style={listStyle}><Link to={"../Pages/home"} className='linkStyle'>Home</Link></li>
                    <li style={listStyle}><Link to={"../Pages/dashpage"} className='linkStyle'>Dashboard</Link></li>
                    <li style={listStyle}><Link to={"../Pages/aboutme"} className='linkStyle'>About Me</Link></li>
                    <li style={listStyle}><Link to={"../Pages/people"} className='linkStyle'>People</Link></li>
                    <li style={listStyle}><Link to={"../Pages/music"} className='linkStyle'>Music</Link></li>
                    <li style={listStyle}><Link to={"../Pages/places"} className='linkStyle'>Places</Link></li>
                </ul>;
    }
}
export default NaviBar;