import React from "react";
import {
    ACCEPT,
    ADD_FIELD_TO_ARRAY, CACHE_CONTROL,
    CHANGE_FORM_FIELD,
    CHANGE_FORM_FIELD_IN_ARRAY,
    CONTENT_TYPE,
    DELETE_FIELD_FROM_ARRAY, METHOD, PARAMS, REQUEST_PAYLOAD
} from "./constants";

export const ContextApp = React.createContext();

export const initialState = {
        list: [],
        form: {
            [METHOD]: 'GET',
            [URL]: '',
            [PARAMS]: [{key:'', value:''}],
            [ACCEPT]: '',
            [CACHE_CONTROL]: '',
            [CONTENT_TYPE]: '',
            [REQUEST_PAYLOAD]: ''
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

            return {
                ...state,
                form: {...state.form, [action.field]: newArr}
            }
        }
        default:
            return state
    }
};