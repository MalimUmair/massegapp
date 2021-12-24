import { createStore, combineReducers } from "redux";
import { groupReducer } from "../MoviesB/groupReducer";

export const confgiStore = ()=>{
    const myStore=createStore(combineReducers({groupReducer}),                                // createStore is a give two arrgument comnbineReducer and ({groupReducr})
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return myStore;
};