import React, {useCallback, useContext} from 'react';
import PropTypes from 'prop-types';
import Tabs from "../Tabs/Tabs";
import Panel from "../Panel/Panel";
import {ContextApp} from "../../reducers/reducer";

import style from './Response.module.css';

const Response = props => {
    const {state: {res: {body, headers, errors}}} = useContext(ContextApp);

    const items = Object.keys(headers).map((item, index )=> (
        <div className={style.headersWrapper} key={index}>
            <div className={style.headerName}>{item}:</div>
            {headers[item]}</div>)
    );

    return (
        (body || headers.length) ?
            <div>
                <Tabs

                >
                    <Panel title={'body'}>
                        <div className={style.textarea}>{body}</div>
                    </Panel>
                    <Panel title={'headers'}>{items}</Panel>
                </Tabs>
            </div>
            : errors.length ?
            <div className={style.errors}>{errors}</div>
            : null

    );
};

Response.propTypes = {};

export default Response;