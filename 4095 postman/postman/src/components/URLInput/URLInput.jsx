import React, {useContext, } from 'react';

import {ContextApp} from "../../reducers/reducer";
import {URL} from "../../reducers/constants";
import {changeFieldForm} from "../../reducers/actions";

import style from './URLInput.module.css';


const URLInput = () => {
    const {state: {form}, dispatch} = useContext(ContextApp);

    const handleChange = e => {
        dispatch(changeFieldForm(URL, e.target.value));
    };

    return (
        <input className={style.input} value={form.url} onChange={handleChange}/>
    )
};

export default URLInput