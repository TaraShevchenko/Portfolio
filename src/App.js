import {NavLink, Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import MortalKombat from "./components/Portfolio/MortalKombat";
import Civa from "./components/Portfolio/Civilization";

function App() {
    return (
        <div className="main">
            <Navigation/>

            <div className="content">
                <Route path="/" exact>
                    <About/>
                </Route>
                <Route path="/portfolio">
                    <Portfolio/>
                </Route>
            </div>

            <Route path="/mortal-kombat">
                <NavLink to="/portfolio" className="appCloseButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                         className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                </NavLink>
                <div className="app">
                    <MortalKombat/>
                </div>
            </Route>

            <Route path="/way-chat">
                <NavLink to="/portfolio" className="appCloseButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                         className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                </NavLink>
                <div className="app">

                </div>
            </Route>

            <Route path="/civilization">
                <NavLink to="/portfolio" className="appCloseButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                         className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                </NavLink>
                <div className="app">
                    <Civa/>
                </div>
            </Route>
        </div>
    );
}

export default App;
