import React, {useContext} from 'react';
import Method from "../Method/Method";
import URLInput from "../URLInput/URLInput";
import {ContextApp} from "../../reducers/reducer";
import Params from "../Params/Params";
import {ADD_FIELD_TO_ARRAY, PARAMS} from "../../reducers/constants";
import {addFieldToArray} from "../../reducers/actions";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

import style from './Form.module.css'
import Button from "../Button/Button";
import Headers from "../Headers/Headers";
import FormData from "../FormData/FormData";
import Body from "../Body/Body";

const Form = () => {
    const {state: {form}, dispatch} = useContext(ContextApp);
    const params = form.params.map((item, ind) => <Params index = {ind} key = {ind}/> );

    const addMore = () => dispatch(addFieldToArray(PARAMS, {key:'', value:''}));

    return(
        <div className={'App'}>

            <Method/>
            <URLInput/>
            <Button text={'Send'}/>
            <Button text={'Save'}/>
            <div className={style.section}>
                <div className={style.sectionHeader}>Query Params</div>
                {params}

                <div className={style.addMore}><span  onClick={addMore}>add more params</span></div>
            </div>
            <div className={style.section}>
                <div className={style.sectionHeader}>Headers</div>
                <Headers/>
            </div>
            <div className={style.section}>
                <FormData />
            </div>
            <div className={style.section}>
                <div className={style.sectionHeader}>RequestPayload</div>
                <Body />
            </div>
        </div>
    )
};

export default Form;