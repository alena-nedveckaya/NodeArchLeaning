import {ADD_FIELD_TO_ARRAY, CHANGE_FORM_FIELD, DELETE_FIELD_FROM_ARRAY, URL} from "./constants";

export const addFieldToArray = (field, item) => {
    return {type: ADD_FIELD_TO_ARRAY, field, item}
};

export const deleteFieldFromArray = (field, index) => {
    return {type: DELETE_FIELD_FROM_ARRAY, field, index}
};

export const changeFieldForm = (field, value) => {
    return {
        type: CHANGE_FORM_FIELD, field, value
    }
}
