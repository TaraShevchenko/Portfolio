import React from "react";
import './MortalKombat.css';
import {Route} from "react-router-dom";
import SelectFighters from "./components/SelectFighters";
import Game from "./components/Game";


const MortalKombat = () => {
    return (
        <div className="root">
            <Route path='/mortal-kombat/' exact>
                <SelectFighters/>
            </Route>

            <Route path='/mortal-kombat/game'>
                <Game/>
            </Route>
        </div>
    );
}

export default MortalKombat;
