import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import {ContextApp, initialState, reducer} from "./reducers/reducer.js";

import Form from "./components/Form/Form";
import UrlList from "./components/UrlList/UrlLIst";

const StoreContext = React.createContext(initialState);

const App = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ContextApp.Provider value={{dispatch, state}}>
            <div className={'wrapper'}>
                <UrlList />
               <Form />
            </div>
        </ContextApp.Provider>
    )
};

export default App;
