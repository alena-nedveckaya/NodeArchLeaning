import React, {useCallback, useContext} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {deleteRequestFromList} from "../../api/api";

import style from './RequestItem.module.css';
import DeleteIcon from "../DeleteIcon/DeleteIcon";
import {ContextApp} from "../../reducers/reducer";
import {resetResponse, setRequestList, setRequestToForm, setResponseError} from "../../reducers/actions";


const RequestItem = props => {
    const {state: {list,}, dispatch} = useContext(ContextApp);

    const setList = useCallback((list) => dispatch(setRequestList(list)), [dispatch]);
    const setRequest = useCallback((data) => dispatch(setRequestToForm(data)), [dispatch]);
    const resetResp = useCallback(() => dispatch(resetResponse()), [dispatch]);

    const handleClickDelete = async() => {
        const res = await deleteRequestFromList({deleteIndex: props.index});
        setList(res);
    };

    const handleClickItem = () =>{
        resetResp();
        setRequest(props);
    };

    return (
        <div className={style.wrapper} onClick={handleClickItem}>
            <div
                className={classNames(style.method,
                    props.method.toLowerCase() === 'post' ? style.post : style.get)}

            >
                {props.method}
            </div>
            <div className={style.url}>{props.url}</div>
            <div className={style.iconWrapper}>
                <DeleteIcon  onClick = {handleClickDelete} className = {style.icon}/>
            </div>
        </div>
    );
};

RequestItem.propTypes = {

};

export default RequestItem;