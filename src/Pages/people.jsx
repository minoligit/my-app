import React, { useState } from "react";
import '../App.css';
import Axios from 'axios';
import PieCPeople from "../charts/piecpeople";
import ViewMore from "../components/viewMore";
import Modal from 'react-modal';

function People(){

    const [search,setSearch] = useState("");
    const [people, setPeople] = useState([]);
    const [viewMoreIsOpen, setViewMoreIsOpen] = useState(false);

    const submitCategory = () => {
        const str = {
            ctg: search
        }
        Axios.post("http://localhost:8080/searchCategory",str).then((res) => {
            setPeople(res.data[0]);
        });
    };
    
	const setViewMoreTrue = ()=> {
		setViewMoreIsOpen(true);
	};
	const setViewMoreFalse = ()=> {
		setViewMoreIsOpen(false);
	};

    return(
        <div>
            <h1 className='App-header'>My App - My People</h1><br/><br/>
            <div className="Content">
                <PieCPeople />
                <div>
                    Category
                    <select name="category" id="searchBar" onChange={(e)=>{setSearch(e.target.value)}}>
                        <option></option>
                        <option value="Actors">Actors</option>
                        <option value="Actresses">Actresses</option>
                        <option value="Athletes">Athletes</option>
                        <option value="Authors">Authors</option>
                        <option value="Comedians">Comedians</option>
                        <option value="Musicians">Musicians</option>
                        {/* <option value="Personalities">Personalities</option> */}
                    </select>
                    <button type="submit" value="submit" className="btn btn-primary" 
                    onClick={submitCategory}>Search</button><br/><br/>
                </div><br/><br/><br/>
                <table id="tableStyle">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Worth (USD)</th>
                        <th>Birth Year</th>
                        <th></th><th></th><th></th>
                    </tr>
                    <tbody>
                        {people.map(data => (
                        <tr key={data.PeopleId} onClick={setViewMoreTrue}>
                            <Modal id="mediumModel" isOpen={viewMoreIsOpen}>
								<button id="closeBtn" onClick={setViewMoreFalse}>X</button>
								<ViewMore />
							</Modal>
                            <td>{data.PeopleId}</td>
                            <td>{data.Name}</td>
                            <td>{data.Worth_USD}</td>
                            <td>{data.BYear}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default People;