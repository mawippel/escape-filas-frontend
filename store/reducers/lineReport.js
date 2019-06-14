import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

export const initialState = {
    lines: [],
    loading: false
};

export const fetchLineStart = (state, action) => {
    return updateObject( state, { loading: true } );
};

export const fetchLineFail = (state, action) => {
    return updateObject( state, { loading: true } );
};

export const fetchLineSuccess = (state, action) => {
    return updateObject( state, {
        lines: action.lines,
        loading: false
    } );
};

export const reportLineStart = (state, action) => {
    return updateObject( state, { loading: true } );
};

export const reportLineFail = (state, action) => {
    return updateObject( state, { loading: false } );
};

export const reportLineSuccess = (state, action) => {
    return updateObject( state, { loading: false } );
};

export const reportLocationStart = (state, action) => {
    return updateObject( state, { loading: true } );
};

export const reportLocationFail = (state, action) => {
    return updateObject( state, { loading: false } );
};

export const reportLocationSuccess = (state, action) => {
    return updateObject( state, { loading: false } );
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_LINES_START: return fetchLineStart(state, action);
        case actionTypes.FETCH_LINES_SUCCESS: return fetchLineSuccess(state, action);
        case actionTypes.FETCH_LINES_FAIL: return fetchLineFail(state, action);

        case actionTypes.REPORT_LINE_START: return reportLineStart(state, action);
        case actionTypes.REPORT_LINE_SUCCESS: return reportLineSuccess(state, action);
        case actionTypes.REPORT_LINE_FAIL: return reportLineFail(state, action);

        case actionTypes.REPORT_LOCATION_START: return reportLocationStart(state, action);
        case actionTypes.REPORT_LOCATION_SUCCESS: return reportLocationSuccess(state, action);
        case actionTypes.REPORT_LOCATION_FAIL: return reportLocationFail(state, action);
        default: return state;
    }
};

export default reducer;