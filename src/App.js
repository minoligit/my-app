import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Introduction from './components/introduction';
import NaviBar from './components/navibar';
import Music from './components/music';
import AddElement from './components/addElement';

function App() {
  return (
    <div className="App">
      <div className='NaviBar'>
        <Router>
          <NaviBar />
          {/* <Routes>
            <Route path='./music' element={<Music/>} />
          </Routes> */}
        </Router>  
      </div>
      <header className="App-header">
        <h1>Welcome to My App !!!</h1>
      </header>
      <div className='Body'>
        <p>This is my first react application</p>
      </div>
      <div className='Introduction'>
        <Introduction />
      </div>
      <br/><br/>
      <div className='AddElement'>
        <Music /><br/><br/>
        <AddElement />
      </div>
    </div>
  
  );
}

export default App;
