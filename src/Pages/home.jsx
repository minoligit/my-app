import React from 'react';
import '../App.css';
import Users from '../components/users';
import AddElement from '../components/addElement';

function Home() {
	return (
		<div>
			<h1 className='App-header'>Welcome to My App !!!</h1><br/><br/>
			<div className='Content'>
				<p>You can share your favourites here.</p><br/>
				<Users /><br/><br/>
				<AddElement /><br/><br/>
			</div>
		</div>
	);
};

export default Home;
