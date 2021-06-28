import React from 'react';
import {Route} from "react-router-dom";
import PlayerChose from "./PlayerChose";
import Game from "./Game";

const MortalKombat = () => {
    return (
        <div className="app">
            <Route path="/MK/chose">
                <PlayerChose />
            </Route>

            <Route path="/MK/game">
                <Game />
            </Route>
        </div>
    );
};

export default MortalKombat;