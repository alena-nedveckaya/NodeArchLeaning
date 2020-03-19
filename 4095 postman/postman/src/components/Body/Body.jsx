import React, {useContext} from 'react';

import style from './Body.module.css';
import {ContextApp} from "../../reducers/reducer";
import {changeFieldForm} from "../../reducers/actions";
import {REQUEST_PAYLOAD} from "../../reducers/constants";

const Body = () => {

    const {dispatch} = useContext(ContextApp);
    const handleChange = (e) => {
        dispatch(changeFieldForm(REQUEST_PAYLOAD, e.target.value))
    }

    return(
        <textarea onChange={handleChange} className={style.textarea}/>
    )
};

export default Body