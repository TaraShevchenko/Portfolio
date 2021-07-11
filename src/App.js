import {Route} from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

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
        </div>
    );
}

export default App;
