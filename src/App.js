import {Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import MortalKombat from "./components/Portfolio/MortalKombat";

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
            <MortalKombat/>
        </div>
    );
}

export default App;
