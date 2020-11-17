import {BrowserRouter, Route, Link} from 'react-router-dom';
import './App.css';
import Pic from './Page1';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">数据表</Link>
              </li>
              <li>
                <Link to="/p1">略缩图</Link>
              </li>
            </ul>
          </nav>
          <Route exact={true} path="/" component={Home} />
          <Route path="/p1" component={Pic} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
