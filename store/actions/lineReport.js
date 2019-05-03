import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

export const reportLine = (placeID, placeName) => {
    return {
        type: actionTypes.REPORT_LINE,
        placeID: placeID,
        placeName: placeName
    };
};

export const reportLocation = (latitude, longitude) => {
    return {
        type: actionTypes.REPORT_LOCATION,
        latitude: latitude,
        longitude: longitude
    };
};

export const fetchLineStart = () => {
    return {
        type: actionTypes.FETCH_LINES_START
    };
};

export const fetchLineSuccess = (lines) => {
    return {
        type: actionTypes.FETCH_LINES_SUCCESS,
        lines: lines
    };
};

export const fetchLineFail = (error) => {
    return {
        type: actionTypes.FETCH_LINES_FAIL,
        error: error
    };
};

export const fetchLines = () => {
    return dispatch => {
        dispatch(fetchLineStart());
        axios.get('/')
            .then(res => {
                console.log(res)
                dispatch(fetchLineSuccess(res));
            })
            .catch(err => {
                dispatch(fetchLineFail(err));
            });
    };
};