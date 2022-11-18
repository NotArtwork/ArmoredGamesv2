import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar.js'
import GamePage from './components/Games/GamePage';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/gamepage'>
          <GamePage />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
