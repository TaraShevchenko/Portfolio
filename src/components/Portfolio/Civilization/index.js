import React from 'react';
import {Provider} from "react-redux";
import store from "./State";
import CivilizationContainer from "./Components/CivilizationContainer";

const Civa = () => {
    return (
        <div>
            <Provider store={store}>
                <CivilizationContainer/>
            </Provider>
        </div>
    );
};

export default Civa;
