import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './RadioButton.module.css';

const RadioButton = (props) => {
    const {name, id, value, onChange, checked, label} = props;

    return (
        <div className={props.className}>
            <input
                type={'radio'}
                name = {name}
                id = {id}
                value={value}
                onChange = {onChange}
                checked={checked}
                className={style.input}
            />
            <label htmlFor={id} className={classNames(style.label, checked && style.labelChecked)}>{label}</label>
        </div>
    )
};
export default RadioButton;