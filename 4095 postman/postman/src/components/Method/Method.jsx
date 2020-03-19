import React, {useContext} from 'react';
import * as PropTypes from 'prop-types';

import {ContextApp} from "../../reducers/reducer";
import {CHANGE_FORM_FIELD} from "../../reducers/constants";
import {METHOD} from "../../reducers/constants"

import style from './Method.module.css';


const Method = () => {

    const {state: {form}, dispatch} = useContext(ContextApp);

    const handleChange = (e) => {
        dispatch({type:CHANGE_FORM_FIELD, field:METHOD, value: e.target.value })
    };

    return (
        <select onChange= {handleChange} value={form.method} className={style.select}>
            <option value={'GET'} className={style.option}>GET</option>
            <option value={'POST'} className={style.option}>POST</option>
            <option value={'PUT'} className={style.option}>PUT</option>
            <option value={'DELETE'} className={style.option}>DELETE</option>
        </select>
    )
};

export default Method;