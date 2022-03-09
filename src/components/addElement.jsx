import React, { useState } from "react";
import Axios from 'axios';
import '../App.css';

function AddElement() {

    const [user_name,setUserName] = useState("");
    const [address,setAddress] = useState("");
    const [occupation,setOccupation] = useState("");
    const [school,setSchool] = useState("");
    const [higherEdu,setHigherEdu] = useState("");
    const [workPlace,setWorkPlace] = useState("");

    const submitUser = () => {
        console.log(user_name);
        Axios.post("http://localhost:8080/insertUser", 
        {user_name:user_name,address:address,occupation:occupation,school:school,higherEdu:higherEdu,workPlace:workPlace
        }).then((res) => {
            console.log(res);
            alert("User added Successfully");
        });
    };

    const labelStyle = {
        width: "40%"
    };

    const buttonStyle = {
        width: "60%"
    };

    return(
        <div id="AddElement">
            <form id="form1">
                <h3>Register</h3><br/>
                <label style={labelStyle}>Name</label>
                <input id="addInput" type="text" name="user_name" required onChange={(e)=>{setUserName(e.target.value)}}/><br/>
                <label style={labelStyle}>Address</label>
                <input id="addInput" type="text" name="address" onChange={(e)=>{setAddress(e.target.value)}}/><br/>
                <label style={labelStyle}>Occupation</label>
                <input id="addInput" type="text" name="occupation" onChange={(e)=>{setOccupation(e.target.value)}}/><br/>
                <label style={labelStyle}>School/College</label>
                <input id="addInput" type="text" name="school" onChange={(e)=>{setSchool(e.target.value)}}/><br/>
                <label style={labelStyle}>Higher Education</label>
                <input id="addInput" type="text" name="higherEdu" onChange={(e)=>{setHigherEdu(e.target.value)}}/><br/>
                <label style={labelStyle}>Work Place</label>
                <input id="addInput" type="text" name="workPlace" onChange={(e)=>{setWorkPlace(e.target.value)}}/><br/><br/>
                <div>
                    <button style={buttonStyle} className="btn btn-primary" type="submit" value="submit" onClick={submitUser}>Create Account</button><br/>
                    <button style={buttonStyle} className="btn btn-danger">Clear</button>
                </div>        
            </form>
        </div>
    );

}

export default AddElement;