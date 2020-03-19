import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {ContextApp, initialState, reducer} from "./reducers/reducer.js";

import Form from "./components/Form/Form";

const StoreContext = React.createContext(initialState);

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ContextApp.Provider value={{dispatch, state}}>
           <Form />
        </ContextApp.Provider>
    )
};

export default App;
