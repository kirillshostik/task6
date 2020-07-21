import employeesReducer from "./employees-reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    employees: employeesReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
