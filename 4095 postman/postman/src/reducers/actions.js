import {
    ADD_FIELD_TO_ARRAY, ADD_TO_LIST,
    CHANGE_FORM_FIELD,
    DELETE_FIELD_FROM_ARRAY, RESET_ERRORS, RESET_REQUEST, RESET_RESPONSE,
    SET_ERROR,
    SET_REQUEST_LIST, SET_REQUEST_TO_FORM, SET_RESPONSE, SET_RESPONSE_ERROR,
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

export const setResponseError = (errors) => {
    return {type: SET_RESPONSE_ERROR,  errors}
};

export const resetErrorsToForm = () => {
    return {type: RESET_ERRORS}
};

export const resetResponse = () => {
    return {type: RESET_RESPONSE}
};

export const changeFieldForm = (field, value) => {
    console.log( '-', field, value)
    return {
        type: CHANGE_FORM_FIELD, field, value
    }
};

export const setRequestList = (data) => {
    return {type: SET_REQUEST_LIST, data}
};

export const addToList = (data) => {
    return {type: ADD_TO_LIST, data}
};

export const setRequestToForm = (data) => {
    return {type:SET_REQUEST_TO_FORM, data}
};

export const setResponseToForm = (key, data) => {
    return {type:SET_RESPONSE,key, data}
};

export const resetRequestToForm = () => {
    return {type: RESET_REQUEST}
};

