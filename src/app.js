import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/initialize';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetCustomers} from './actions/customers';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';

const store = configureStore(); //setup redux

// Provides store for all components
const jsx = (
    <Provider store={store}> 
        <AppRouter />
    </Provider>
)

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};



//Bootstrap
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));
//renderApp();

firebase.auth().onAuthStateChanged((user) => {
    if (user){ //fetch data from user and render the app on dashboard
        store.dispatch(login(user.uid));
        store.dispatch(startSetCustomers()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
        })
    } else { // direct visitor to login page
        store.dispatch(logout());
        renderApp();
        history.push('/'); 
    }
})
