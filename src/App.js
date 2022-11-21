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
        <Route path='/gamepage'
         element={<GamePage />}
         >
        </Route>
        <Route path='/'
          element={<Home />}
          >
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
