import React from "react";
import ReactDOM from "react";
import {Link} from 'react-router-dom';

class NaviBar extends React.Component {

    state = {
        list: ["People","Music","Food","Places","Hobbies"]
    }
    render(){
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }

    renderList(){
        const uListStyle = {
            listStyle: "none"
        };
        const listStyle = {
            display: "inline",
            padding: "10px 40px"
        };
        
        if (this.state.list.length === 0) return "No Items";
        else return <ul style={uListStyle}>{this.state.list.map(list => <li key={list} style={listStyle}>{list}</li>)}</ul>; 
        // return <ul style={uListStyle}>
        //             <li><Link>People</Link></li>
        //             <li><Link to={"./music"}>Music</Link></li>
        //             <li><Link>Food</Link></li>
        //         </ul>;
    }
}
export default NaviBar;