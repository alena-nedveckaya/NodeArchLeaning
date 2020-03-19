import React, {useContext} from 'react';

import style from './FormData.module.css'
import Button from "../Button/Button";
import {ContextApp} from "../../reducers/reducer";
import {changeFieldForm} from "../../reducers/actions";
import {CONTENT_TYPE} from "../../reducers/constants";

const FormData = () => {
    const {state: {form}, dispatch} = useContext(ContextApp);

    const handleClick = (value) => () => {
        dispatch(changeFieldForm(CONTENT_TYPE, value))
    }

    return (
        <div>
            <Button
                text={'application/x-www-form-urlencoded'}
                onClick = {handleClick('application/x-www-form-urlencoded')}
            />
            <Button
                text={'multipart/form-data'}
                onClick = {handleClick('multipart/form-data')}
            />
        </div>
    )
};

export default FormData;