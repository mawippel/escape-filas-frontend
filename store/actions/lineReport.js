import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

export const reportLine = (placeID, placeName) => {
    return dispatch => {
        dispatch(reportLineStart());
        axios.get('/')
            .then(res => {
                console.log(res)
                dispatch(reportLineSuccess(res));
            })
            .catch(err => {
                dispatch(reportLineFail(err));
            });
    };
};

export const reportLineStart = () => {
    return {
        type: actionTypes.REPORT_LINE_START,
    };
};

export const reportLineSuccess = () => {
    return {
        type: actionTypes.REPORT_LINE_SUCCESS,
    };
};

export const reportLineFail = (error) => {
    return {
        type: actionTypes.REPORT_LINE_FAIL,
        error: error
    };
};

export const reportLocation = (latitude, longitude) => {
    return dispatch => {
        dispatch(reportLocationStart());
        axios.get('/')
            .then(res => {
                console.log(res)
                dispatch(reportLocationSuccess(res));
            })
            .catch(err => {
                dispatch(reportLocationFail(err));
            });
    };
};

export const reportLocationStart = () => {
    return {
        type: actionTypes.REPORT_LOCATION_START,
    };
};

export const reportLocationSuccess = () => {
    return {
        type: actionTypes.REPORT_LOCATION_SUCCESS,
    };
};

export const reportLineFail = (error) => {
    return {
        type: actionTypes.REPORT_LOCATION_FAIL,
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
