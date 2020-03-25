import React from "react";
import {
    ACCEPT,
    ADD_FIELD_TO_ARRAY,
    BODY,
    CACHE_CONTROL,
    CHANGE_FORM_FIELD,
    CHANGE_FORM_FIELD_IN_ARRAY,
    CONTENT_TYPE,
    DELETE_FIELD_FROM_ARRAY,
    HEADERS,
    METHOD,
    PARAMS,
    URL,
    REQUEST_PAYLOAD,
    SET_ERROR,
    SET_REQUEST_LIST,
    RESET_ERRORS,
    SET_REQUEST_TO_FORM,
    SET_BODY_RESPONSE,
    SET_HEADERS_RESPONSE,
    SET_RESPONSE,
    RAW_BODY,
    ADD_TO_LIST,
    COMMON,
    SET_RESPONSE_ERROR, RESET_RESPONSE, RESET_REQUEST
} from "./constants";

export const ContextApp = React.createContext();

export const initialState = {
        list: [],
        form: {
            [METHOD]: 'GET',
            [URL]: '',
            [PARAMS]: [{key:'', value:''}],
            [HEADERS] : [{key:'', value:''}],
            [CONTENT_TYPE]: 'application/x-www-form-urlencoded',
            [BODY]:[{key:'', value:''}],
            [RAW_BODY]: ''
/*            [ACCEPT]: '',
            [CACHE_CONTROL]: '',
            [REQUEST_PAYLOAD]: ''*/
        },
        errors: {
            [URL]: '',
            [PARAMS]: '',
            [HEADERS] : '',
            [BODY]: '',

        },
        res:{
            body:'',
            headers:[],
            errors:''
        }
};

export const reducer = (state, action) => {

    switch (action.type) {
        case CHANGE_FORM_FIELD:
            return {
                ...state,
                form: {...state.form, [action.field]: action.value }
            };
        case CHANGE_FORM_FIELD_IN_ARRAY: {
            const newArr = [...state.form[action.field]];
            const newElem = {...newArr[action.index], [action.key]: action.value};
            newArr.splice(action.index, 1, newElem);

            return {
                ...state,
                form: {...state.form, [action.field]: newArr}
            };
        }
        case ADD_FIELD_TO_ARRAY: {
            const newArr = [...state.form[action.field]];
            newArr.push(action.item);
            return {
                ...state,
                form: {...state.form, [action.field]: newArr}
            }
        }
        case DELETE_FIELD_FROM_ARRAY: {
            const newArr = [...state.form[action.field]];
            if (newArr.length > 1)
                newArr.splice(action.index, 1);
            else {
                newArr.splice(action.index, 1, {key:'', value:''});
            }
            return {
                ...state,
                form: {...state.form, [action.field]: newArr}
            }
        }

        case RESET_ERRORS: {
            return {
                ...state,
                errors: {...initialState.errors}
            }
        }

        case SET_ERROR: {
            return {
                ...state,
                errors: {...state.errors, [action.field]: action.error }
            }
        }

        case SET_REQUEST_LIST: {
            return {
                ...state,
                list: action.data
            }
        }
        case ADD_TO_LIST:{
            return {
                ...state,
                list: [...state.list, action.data]
            }
        }
        case SET_REQUEST_TO_FORM: {
            return {
                ...state,
                form: {
                    [METHOD]: action.data[METHOD],
                    [URL]: action.data[URL],
                    [PARAMS]: action.data[PARAMS].length ? action.data[PARAMS] : [{key: '', value: ''}],
                    [HEADERS]: action.data[HEADERS].length ? action.data[HEADERS] : [{key: '', value: ''}],
                    [CONTENT_TYPE]: action.data[CONTENT_TYPE],
                    [BODY]: action.data[BODY].length ? action.data[BODY] : [{key: '', value: ''}],
                    [RAW_BODY]: action.data[RAW_BODY],
                }
            }
        }

        case SET_RESPONSE: {
            return {
                ...state,
                res: {...state.res, [action.key]: action.data}
            }
        }

        case RESET_REQUEST: {
            return {
                ...state,
                form: {...initialState.form},
                res: {...initialState.res},
                errors: {...initialState.errors}
            }
        }

        case SET_RESPONSE_ERROR:{
            return {
                ...state,
                res: {...state.res, errors: action.errors}
            }
        }

        case RESET_RESPONSE : {
            return {
                ...state,
                res: {...initialState.res}
            }
        }

        default:
            return state
    }
};