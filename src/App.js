import {Link, Route, Routes} from "react-router-dom";

import Account from './routes/Account';
import Home from "./routes/Home";
import Howitworks from './routes/Howitworks';
import Mission from './routes/Mission';
import ShopSwap from './routes/ShopSwap';
import TheHatchText from "./routes/images/The Hatch Finals_Text Only_small.png";
import styles from './App.module.scss';

function App() {
  return (
    <div className={`${styles.App} container-fluid`}>
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="/" title="home-page">
            <img
              src={TheHatchText}
              alt="the-hatch-logo-text-only"
              rel="noreferrer"
            ></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li>
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Howitworks" className="nav-link active">
                  How it Works
                </Link>
              </li>
              <li>
                <Link to="/ShopSwap" className="nav-link active">
                  Shop N Swap
                </Link>
              </li>
              <li>
                <Link to="/Account" className="nav-link active">
                  Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Howitworks" element={<Howitworks />}></Route>
        <Route path="/ShopSwap" element={<ShopSwap/>}></Route>
        <Route path="/Mission" element={<Mission />}></Route>
        <Route path="/Account" element={<Account />}></Route>
      </Routes>      
  
    </div>
  );
}

export default App;
