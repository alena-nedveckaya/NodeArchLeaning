import React, {useCallback, useContext, useEffect} from 'react';
import PropTypes from 'prop-types';
import {ContextApp} from "../../reducers/reducer";
import {getRequestList, saveInList} from "../../api/api";

import style from './UrlList.module.css'
import RequestItem from "../RequestItem/RequestItem";
import {setRequestList} from "../../reducers/actions";

const UrlList = props => {
    const {state: {list}, dispatch} = useContext(ContextApp);

    const setList = useCallback((list) => dispatch(setRequestList(list)), [dispatch]);

    const getData = async () => {
        try{
        const res = await getRequestList();
        setList(res);
        }
        catch (e) {
            console.error('error:', e)
        }
    };

    useEffect(() => {
        const res = getData()
    }, []);

    const items = list.map((item, index) => <RequestItem {...item} key={index} index={index}/>);

    return (
        <div className={style.wrapper}>
            {items}
        </div>
    );
};

UrlList.propTypes = {

};

export default UrlList;