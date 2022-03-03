import React, {useEffect,useState} from "react";
import '../App.css';
import Axios from 'axios';

function AboutMe() {

    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8080/searchUser").then((res) => {
            setUserInfo(res.data);
        });
    }, []);

	return (
		<div><h1 className='App-header'>My App - About Me</h1><br/><br/><br/><br/>
            <div className="Content">
                {userInfo.map(data => (
                <div key={data.user_id} >
                <table>
                    <tr>
                        <th>
                            <div className='Introduction'>
                                {"Hii, Welcome to my page."}<br/>
                                {"I'm "+data.user_name+" from "+data.address+"."}<br/><br/>
                                {"You can view my information here."}
                            </div>
                        </th>
                    </tr>
                </table><br/><br/>
                <label>Occupation :</label>{data.occupation}<br/>
                <label>School/College :</label>{data.school}<br/>
                <label>Higher Education :</label>{data.higherEdu}<br/>
                <label>Work At : </label>{data.workPlace}<br/>
                </div>))}
            </div>
        </div>
	);
};

export default AboutMe;