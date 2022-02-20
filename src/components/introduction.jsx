import React from "react";
import reactDom from "react-dom";

class Introduction extends React.Component {

    state = {
        name : "Minoli Fernando",
        address : "Marandagahamula",
        occ : "Student",
    }

    render(){
        return(
            <div>{this.getIntro()}</div>
        );
    }

    getIntro(){
        let intro = "Hii, My name is " + this.state.name + " and I'm from " + this.state.address + ". I'm a ";
        intro += this.state.occ + ".";
        return intro;
    }
}

export default Introduction;