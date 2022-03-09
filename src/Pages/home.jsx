import React, {useState,useEffect} from 'react';
import '../App.css';
import Users from '../components/users';
import AddElement from '../components/addElement';
import Modal from 'react-modal';

function Home() {

	const [AddElementIsOpen, setAddElementIsOpen] = useState(false);
	const setAddElementTrue = ()=> {
		setAddElementIsOpen(true);
	}
	const setAddElementFalse = ()=> {
		setAddElementIsOpen(false);
	}

	return (
		<div>
			<h1 className='App-header'>Welcome to My App !!!</h1><br/><br/>
			<div className='Content'>
				<table>
					<tr>
						<td width="80%">You can share your favourites here.</td>
						<td>
							<button onClick={setAddElementTrue}>Create New Account</button><br/><br/>
							<div>
								<Modal id='mediumModal' isOpen={AddElementIsOpen}>
									<button id='closeBtn' onClick={setAddElementFalse}>X</button>
									<AddElement />
								</Modal>
							</div>							
						</td>
					</tr>
				</table>
				<br/><br/>
				<Users /><br/><br/>
			</div>
		</div>
	);
};

export default Home;
