import React, {useCallback, useContext} from 'react';
import classNames from 'classnames';
import Method from "../Method/Method";
import URLInput from "../URLInput/URLInput";
import {ContextApp} from "../../reducers/reducer";
import Params from "../Params/Params";
import {BODY, CONTENT_TYPE, HEADERS, PARAMS, URL} from "../../reducers/constants";
import {
    addFieldToArray,
    changeFieldForm, resetErrorsToForm,
    setErrorToForm, setRequestList
} from "../../reducers/actions";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

import style from './Form.module.css'
import Button from "../Button/Button";
import RadioButton from "../RadioButton/RadioButton";
import Response from "../Response/Response";
import {saveInList, sendRequest} from "../../api/api";


const Form = () => {
    const {state: {form, errors}, dispatch} = useContext(ContextApp);
    console.log('errors FORM', errors )

    const addMore = useCallback((field) => () => dispatch(addFieldToArray(field, {key: '', value: ''})), [dispatch]);
    const handleChangeRadio = useCallback((e) => dispatch(changeFieldForm([CONTENT_TYPE], e.target.value)), [dispatch]);
    const setError = useCallback((field, error) => dispatch(setErrorToForm(field, error)), [dispatch]);
    const resetError = useCallback(() => dispatch(resetErrorsToForm()), [dispatch]);
    const setList = useCallback((list) => dispatch(setRequestList(list)), [dispatch]);

    const params = form[PARAMS].map((item, ind) => (
        <Params index={ind} key={ind} field={PARAMS}/>));

    const headers = form[HEADERS].map((item, ind) => (
        <Params index={ind} key={ind} field={HEADERS}/>));

    const bodyParams = form[BODY].map((item, ind) => (
        <Params index={ind} key={ind} field={BODY}/>));

    const filterDataForRequest = () => {
        const params = form.params.filter((item) => item.key.length || item.value.length);
        const headers = form.headers.filter((item) => item.key.length || item.value.length);
        const body = form.body.filter((item) => item.key.length || item.value.length);

        return  {...form, params, body, headers};
    };

    const handleErrors = (data) => {
        resetError();
        if (data.errorCode !== 0) {
            for (let key in data.errorDescription) {
                setError(key, data.errorDescription[key])
            }
            return false
        }
        else {
            return true
        }
    };


    const handleSave = async () => {
        const data = filterDataForRequest();

        const res = await saveInList(data);

        const valid = handleErrors(res);
        if(valid){
            setList(res.list);
        }

    };

    const handleSend = async () => {
        const data = filterDataForRequest();
        const res = await sendRequest(data);
        const valid = handleErrors(res);
        if(valid){
            setList(res.list);
        }
    };

    return (
        <div className={'App'}>

            <Method/>
            <URLInput/>
            <Button text={'Send'} onClick={handleSend}/>
            <Button text={'Save'} onClick={handleSave}/>
            {errors[URL].length > 0 && <div className={style.error}>{errors[URL]}</div>}
            <div className={style.section}>
                    <div className={style.sectionHeader}>Query Params</div>
                    {errors[PARAMS].length > 0 && <div className={style.error}>{errors[PARAMS]}</div>}
                    {params}

                    <div className={style.addMore}><span onClick={addMore(PARAMS)}>add more params</span></div>

            </div>
            <div className={style.section}>
                    <div className={style.sectionHeader}>Headers</div>
                    {errors[HEADERS].length > 0 && <div className={style.error}>{errors[HEADERS]}</div>}
                    {headers}
                    <div className={style.addMore}><span onClick={addMore(HEADERS)}>add more params</span></div>

            </div>
            <div className={classNames(style.section, style.formDataWrap)}>
                <RadioButton
                    className={style.radioButton}
                    id={'url-encoded'}
                    name={'formData'}
                    value={'application/x-www-form-urlencoded'}
                    label={'x-www-form-urlencoded'}
                    checked={form[CONTENT_TYPE] === 'application/x-www-form-urlencoded'}
                    onChange={handleChangeRadio}
                />
                <RadioButton
                    id={'multipart'}
                    name={'formData'}
                    value={'multipart/form-data'}
                    label={'form-data'}
                    checked={form[CONTENT_TYPE] === 'multipart/form-data'}
                    onChange={handleChangeRadio}
                />
            </div>

            <div className={style.section}>
                {errors[BODY].length > 0 && <div className={style.error}>{errors[BODY]}</div>}
                <div>
                    {bodyParams}
                    <div className={style.addMore}><span onClick={addMore(BODY)}>add more params</span></div>
                </div>

            </div>

            <div className={style.section}>
                <div className={style.sectionHeader}>Response</div>
                <Response/>
            </div>
            {/*          <div className={style.section}>
                <div className={style.sectionHeader}>RequestPayload</div>
                <Body />
            </div>*/}
        </div>
    )
};

export default Form;