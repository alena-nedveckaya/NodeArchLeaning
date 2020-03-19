import React, {useContext} from 'react';

import style from './Headers.module.css';
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import {ContextApp} from "../../reducers/reducer";
import {ACCEPT, CACHE_CONTROL, CONTENT_TYPE} from "../../reducers/constants";
import Header from "../Header/Header";

const Headers = () => {
    const {state: {form}, dispatch} = useContext(ContextApp);

    const handleChange = (field) => () => {

};

    return (
        <>
       <Header
            name = 'Accept'
            field = {ACCEPT}
            value = {form[ACCEPT]}
       />
            <Header
                name = 'Cache-Control'
                field = {CACHE_CONTROL}
                value = {form[CACHE_CONTROL]}
            />
            <Header
                name = 'Content-Type'
                field = {CONTENT_TYPE}
                value = {form[CONTENT_TYPE]}
            />
       </>

    )

};

export default Headers