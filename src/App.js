import './App.css';
import { BrowserRouter as Router, Routes, Route, NavBar, NavLink} from 'react-router-dom';
import NaviBar from './components/navibar';
import Home from './Pages/home';
import AboutMe from './Pages/aboutme';
import Music from './Pages/music';
import Places from './Pages/places';
import People from './Pages/people';
import SideBar from './components/sidebar';
import DashPage from './Pages/dashpage';

function App() {
  return (
    <div className="App">
      <header className='NaviBar'>
        <div className='Body'>
          <Router>
            <NaviBar />
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/Pages/home' element={<Home />} />
                <Route path='/Pages/dashpage' element={<DashPage />} />
                <Route path='/Pages/aboutme' element={<AboutMe />} />
                <Route path='/Pages/people' element={<People />} />
                <Route path='/Pages/music' element={<Music />} />
                <Route path='/Pages/places' element={<Places />} />
              </Routes>
          </Router>  
        </div>
      </header>
      {/* <div className='SideBar'>
        <Router>
          <SideBar />
            <Routes>
              <Route path='/Pages/dashpage' element={<DashPage />} />
            </Routes>
        </Router>
      </div> */}
    </div>
  
  );
}

export default App;
