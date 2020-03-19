import React, {useContext} from 'react'

import style from './Header.module.css';
import {changeFieldForm} from "../../reducers/actions";
import {URL} from "../../reducers/constants";
import {ContextApp} from "../../reducers/reducer";


const Header = (props) => {
    const {state: {form}, dispatch} = useContext(ContextApp);

    const handleChange = (type) => (e) => {
        dispatch(changeFieldForm(type, e.target.value));
    };

    return (
        <div className={style.wrapper}>
            <input
                value={props.name}
                className={style.input}
            />
            <input
                placeholder={'Value'}
                onChange={handleChange(props.field)}
                value={props.value}
                className={style.input}
            />
        </div>
    )
};

export default Header;