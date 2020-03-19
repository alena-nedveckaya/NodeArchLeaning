import React, {useContext} from 'react';
import {ContextApp} from "../../reducers/reducer";
import {PARAMS} from "../../reducers/constants";
import {CHANGE_FORM_FIELD, CHANGE_FORM_FIELD_IN_ARRAY} from "../../reducers/constants";

import DeleteIcon from "../DeleteIcon/DeleteIcon";
import {deleteFieldFromArray} from "../../reducers/actions";

import style from './Params.module.css';

const Params = (props) => {
    const {state: {form}, dispatch} = useContext(ContextApp);

    const handleChange = (type) => (e) => {
        dispatch({
            type: CHANGE_FORM_FIELD_IN_ARRAY,
            field: PARAMS,
            index: props.index,
            key: type,
            value: e.target.value
        })
    };

    const deleteItem = () =>{
        dispatch(deleteFieldFromArray(PARAMS, props.index))
    };

    return (
        <div className={style.wrapper}>
            <input
                placeholder={'Key'}
                onChange={handleChange('key')}
                value={form.params[props.index].key}
                className={style.input}
            />
            <input
                placeholder={'Value'}
                onChange={handleChange('value')}
                value={form.params[props.index].value}
                className={style.input}
            />
            <DeleteIcon className = {style.icon} onClick = {deleteItem}
            />
        </div>
    )
};

export default Params;