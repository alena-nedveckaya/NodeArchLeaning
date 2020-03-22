import {
    ADD_FIELD_TO_ARRAY,
    CHANGE_FORM_FIELD,
    DELETE_FIELD_FROM_ARRAY, RESET_ERRORS,
    SET_ERROR,
    SET_REQUEST_LIST, SET_REQUEST_TO_FORM,
    URL
} from "./constants";
import {api} from "../api/api";

export const addFieldToArray = (field, item) => {
    return {type: ADD_FIELD_TO_ARRAY, field, item}
};

export const deleteFieldFromArray = (field, index) => {
    return {type: DELETE_FIELD_FROM_ARRAY, field, index}
};

export const setErrorToForm = (field, error) => {
    return {type: SET_ERROR, field, error}
};

export const resetErrorsToForm = () => {
    console.log( 'resetErrorsToForm')
    return {type: RESET_ERRORS}
};

export const changeFieldForm = (field, value) => {
    return {
        type: CHANGE_FORM_FIELD, field, value
    }
};

export const setRequestList = (data) => {
    return {type: SET_REQUEST_LIST, data}
};

export const setRequestToForm = (data) => {
    return {type:SET_REQUEST_TO_FORM, data}
}

