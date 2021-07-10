import React from 'react';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import {Provider} from "react-redux";


const WayChat = () => {
    return(
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

export default WayChat;