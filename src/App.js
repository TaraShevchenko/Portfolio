import './App.scss';
import {Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import MortalKombat from "./components/Portfolio/MortalKombat";

function App() {
    return (
        <div className="App">
            <Navigation />

            <div className="contentWrapper">
                <div className="content">
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                </div>
            </div>
            <MortalKombat />
        </div>
    );
}

export default App;
