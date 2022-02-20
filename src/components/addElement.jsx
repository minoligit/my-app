import React from "react";
import ReactDOM from "react";

class AddElement extends React.Component {

    render(){

        const formStyle = {
            backgroundColor: "LightBlue",
            padding: "25px 50px",
            fontSize: "1.5em", 
            fontStyle: "sansSerif",
            width: "50%",
        };

        const labelStyle = {
            width: "25%"
        };

        const inputStyle = {
            width: "50%"
        };

        const buttonStyle = {
            width: "auto"
        };

        return(
            <div style={formStyle}>
                <form id="add-element">
                    <h3>Add New Element</h3>
                    <label style={labelStyle}>Id</label><input style={inputStyle} type="number" name="id"/><br/>
                    <label style={labelStyle}>Name</label><input style={inputStyle} type="text" name="name"/><br/>
                    <label style={labelStyle}>Author</label><input style={inputStyle} type="text" name="artist"/><br/><br/>
                    <button style={buttonStyle} className="btn btn-primary" type="submit" value="submit">Enter</button>
                    <button style={buttonStyle} className="btn btn-danger" onClick={this.clear()}>Clear</button>
                </form>
            </div>
        );
    }

    clear(){
    }
}

export default AddElement;