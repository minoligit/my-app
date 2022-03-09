import React, { useEffect, useState } from "react";
import Axios from 'axios';
import '../App.css';

function Users(){

    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/selectAll").then((res) => {
            setUsersList(res.data);
        });
    }, []); 

    const deleteUser = (value) => {
        const str = {
            userId: value
        }
        Axios.delete("http://localhost:8080/deleteUser",str).then((res) => {
            setUsersList(res.data);
            alert("User deleted Successfully");
        });
    };

    return(
        <div>
            <h3>Registered Users</h3><br/>
            <table id="tableStyle">
                <tr>
                    <th>User Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Occupation</th>
                    <th></th><th></th><th></th>
                </tr>
                <tbody>
                    {usersList.map(data => (
                    <tr key={data.user_id} >
                        <td>{data.user_id}</td>
                        <td>{data.user_name}</td>
                        <td>{data.address}</td>
                        <td>{data.occupation}</td>
                        <td></td>
                        <td><button className="btn btn-primary">Edit</button></td>
                        <td><button className="btn btn-danger" onClick={()=>deleteUser(data.user_id)}>Delete</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
}

export default Users;