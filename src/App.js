import logo from './logo.svg';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Pic from './Page1';
import Data from './Page2';
import Members from './Page3';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/p1">Pic</Link>
              </li>
              <li>
                <Link to="/about">Data</Link>
              </li>
              <li>
                <Link to="/users">Members</Link>
              </li>
            </ul>
          </nav>
          <Route exact={true} path="/" component={Home} />
          <Route path="/p1" component={Pic} />
          <Route path="/about" component={Data} />
          <Route path="/users" component={Members} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
