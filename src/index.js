import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import {home} from "./reducers/home";

const defaultState = {
    masterSwitchOn: false,
    kitchenLightOn: false,
    livingRoomLightOn: false,
    bedroomLightOn: false
};

const store = createStore(home, defaultState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

const mapStateToProps = state => ({ });
export default connect(mapStateToProps)(App);