// import './index.css';
import './style.scss';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function Header(){
    return (
        <>
         <h1 className="heading">Webpack Tutorial</h1>
         <h3>Welcome {process.env.ANOTHER_KEY}</h3>
         <ul>
           <li>
               <Link to="/">Home</Link>
           </li>
           <li>
               <Link to="/About">About</Link>
           </li>
           <li>
               <Link to="/Profile">Profile</Link>
           </li>
         </ul>
        </>
    )
}
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
           <Route path="/" element = {<Home />} />
           <Route path="/About" element = {<About />} />
           <Route path="/Profile" element = {<Profile />} />
        </Routes>
    </BrowserRouter>

  )
}

export default App