import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

export const reportLine = (placeID, placeName, quantity) => {
    return dispatch => {
        dispatch(reportLineStart());
        axios.post('', {
            query: `mutation { addReport (name:"${placeName}", placeId:"${placeID}", quantity:${quantity}) {name placeId } }`
        }
        )
            .then(res => {
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

export const reportLocation = (uuid, latitude, longitude) => {
    return dispatch => {
        dispatch(reportLocationStart());
        axios.post('', {
            query: `mutation { addReportLocation (uid:"${uuid}", lat:"${latitude}", lng:"${longitude}") {name placeId } }`
        }
        )
            .then(res => {
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

export const reportLocationFail = (error) => {
    return {
        type: actionTypes.REPORT_LOCATION_FAIL,
        error: error
    };
};

export const fetchLines = (latitude, longitude) => {
    return dispatch => {
        dispatch(fetchLineStart());
        axios.post('', {
            query: `{ placeLines { placeId quantity placeName } }`
        }
        )
            .then(res => {
                const fetchedLines = [];
                for (let key in res.data.data.placeLines) {
                    fetchedLines.push({
                        ...res.data[key],
                        id: key,
                        ...res.data.data.placeLines[key]
                    });
                }
                dispatch(fetchLineSuccess(fetchedLines));
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
