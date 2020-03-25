import React, {useCallback, useContext} from 'react';
import classNames from 'classnames';
import Method from "../Method/Method";
import URLInput from "../URLInput/URLInput";
import {ContextApp} from "../../reducers/reducer";
import Params from "../Params/Params";
import {BODY, COMMON, CONTENT_TYPE, HEADERS, PARAMS, RAW_BODY, URL} from "../../reducers/constants";
import {
    addFieldToArray, addToList,
    changeFieldForm, resetErrorsToForm, resetRequestToForm,
    setErrorToForm, setRequestList, setResponseError, setResponseToForm
} from "../../reducers/actions";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

import style from './Form.module.css'
import Button from "../Button/Button";
import RadioButton from "../RadioButton/RadioButton";
import Response from "../Response/Response";
import {saveInList, sendRequest} from "../../api/api";


const Form = () => {
    const {state: {form, errors, res}, dispatch} = useContext(ContextApp);

    const addMore = useCallback((field) => () => dispatch(addFieldToArray(field, {key: '', value: ''})), [dispatch]);
    const changeField = useCallback((field, value) => dispatch(changeFieldForm(field, value)), [dispatch]);
    const setError = useCallback((field, error) => dispatch(setErrorToForm(field, error)), [dispatch]);
    const setResponseErr = useCallback((error) => dispatch(setResponseError(error)), [dispatch]);
    const resetError = useCallback(() => dispatch(resetErrorsToForm()), [dispatch]);
    const addRequestToList = useCallback((data) => dispatch(addToList(data)), [dispatch]);
    const setResponse = useCallback((key, data) => dispatch(setResponseToForm(key, data)), [dispatch]);
    const resetRequest = useCallback(() => dispatch(resetRequestToForm()), [dispatch]);

    const params = form[PARAMS].map((item, ind) => (
        <Params index={ind} key={ind} field={PARAMS}/>));

    const headers = form[HEADERS].map((item, ind) => (
        <Params index={ind} key={ind} field={HEADERS}/>));

    const bodyParams = form[BODY].map((item, ind) => (
        <Params index={ind} key={ind} field={BODY}/>));

    const filterDataForRequest = () => {
        const params = form.params.filter((item) => item.key.length || item.value.length);
        const headers = form.headers.filter((item) => item.key.length || item.value.length);

        /*  const rawBody = form[RAW_BODY]?.length ? JSON.stringify(form[RAW_BODY]) : '';*/
        const body = form.body.filter((item) => item.key.length || item.value.length);

        return {...form, params, body, headers};
    };

    const handleErrors = (data) => {
        resetError();
        if (data.errorCode === 1) {
            for (let key in data.errorDescription) {
                setError(key, data.errorDescription[key])
            }
            return false
        } else if (data.errorCode === 2) {
            setResponseErr(data.errorDescription);
            return false
        } else {
            return true
        }
    };

    const handleSave = async () => {
        const data = filterDataForRequest();

        const res = await saveInList(data);

        const valid = handleErrors(res);
        if (valid) {
            addRequestToList(res.request);
        }

    };

    const handleSend = async () => {

        const data = filterDataForRequest();

        const res = await sendRequest(data);
        const valid = handleErrors(res);
        if (valid) {
            addRequestToList(res.request);
            setResponse(BODY, res.response);
            setResponse(HEADERS, res.headers);
        }
    };

    const handleChangeRadio = (e) => {
        changeField(CONTENT_TYPE, e.target.value);
        if (e.target.value === 'raw') {
            changeField(BODY, [{key: '', value: ''}])
        } else {
            changeField(RAW_BODY, '')
        }
    };

    return (
        <div className={'App'}>
            <div className={style.wrapper}>
                <div className={style.urlWrapper}>
                    <Method/>
                    <URLInput/>
                   {/* <Button text={'Send'} onClick={handleSend}/>*/}
                    <Button text={'Save'} onClick={handleSave}/>
                </div>
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
                        className={style.radioButton}
                        id={'multipart'}
                        name={'formData'}
                        value={'multipart/form-data'}
                        label={'form-data'}
                        checked={form[CONTENT_TYPE] === 'multipart/form-data'}
                        onChange={handleChangeRadio}
                    />
                    <RadioButton
                        id={'raw'}
                        name={'formData'}
                        value={'raw'}
                        label={'raw'}
                        checked={form[CONTENT_TYPE] === 'raw'}
                        onChange={handleChangeRadio}
                    />
                </div>

                <div className={style.section}>
                    {form[CONTENT_TYPE] === 'raw' ?
                        <textarea
                            className={style.rawTextarea}
                            value={form[RAW_BODY]}
                            onChange={(e) => changeField(RAW_BODY, e.target.value)}
                        />
                        : (<>
                            {errors[BODY].length > 0 && <div className={style.error}>{errors[BODY]}</div>}
                            <div>
                                {bodyParams}
                                <div className={style.addMore}><span onClick={addMore(BODY)}>add more params</span>
                                </div>
                            </div>
                        </>)}

                </div>
                <div className={style.actionButtons}>
                    <Button text={'Send'} onClick={handleSend}/>
                    <Button onClick={resetRequest} text={'Reset'}/>
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
        </div>
    )
};

export default Form;