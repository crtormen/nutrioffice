import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import filtersReducer from '../reducers/filters';
import customersReducer from '../reducers/customers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Store
export default () => {
    
    const store = createStore(
        combineReducers({  //Create only one reducer
            auth: authReducer,
            filters: filtersReducer,
            customers: customersReducer
        }),
        composeEnhancers(applyMiddleware(thunk)) // thunk allows to pass a function to an action generator, insted of an object.
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //Redux DevTools Extension for browser
    );
    return store;
};