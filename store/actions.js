import axios from 'axios';
import * as actionTypes from './actionTypes';

export const setFilterDate = (year) => {
    return {
        type: actionTypes.SET_FILTER_DATE,
        payload: year
    };
};

export const removeFilterDate = () => {
    return {
        type: actionTypes.REMOVE_FILTER_DATE,
    };
};

export const setLaunches = (launches) => {
    return {
        type: actionTypes.SET_LAUNCH_DATA,
        payload: launches
    };
};

export const setLaunchError = () => {
    return {
        type: actionTypes.SET_LAUNCH_ERROR
    };
};

export const setFilterLauch = (lauch) => {
    return {
        type: actionTypes.SET_FILTER_LAUNCH,
        payload: lauch
    };
};

export const removeFilterLaunch = () => {
    return {
        type: actionTypes.REMOVE_FILTER_LAUNCH,
    };
};

export const setFilterLand = (lauch) => {
    return {
        type: actionTypes.SET_FILTER_LAND,
        payload: lauch
    };
};

export const removeFilterLand = () => {
    return {
        type: actionTypes.REMOVE_FILTER_LAND,
    };
};

export const initLaunches = (limit = 100, year = null, launchSuccess = null, landSuccess = null) => {
    console.log(limit, year, launchSuccess, landSuccess);
    return dispatch => {
        let requestURL = `https://api.spacexdata.com/v3/launches?limit=${limit}`;

        if (year) {
            requestURL = `${requestURL}&launch_year=${year}`;
            dispatch(setFilterDate(year));
        } else {
            dispatch(removeFilterDate());
        }

        if (launchSuccess !== null) {
            requestURL = `${requestURL}&launch_success=${launchSuccess}`;
            dispatch(setFilterLauch(launchSuccess));
        } else {
            dispatch(removeFilterLaunch());
        }

        if (landSuccess !== null) {
            requestURL = `${requestURL}&land_success=${landSuccess}`;
            dispatch(setFilterLand(landSuccess));
        } else {
            dispatch(removeFilterLand());
        }

        axios.get(requestURL).then(response => {
            dispatch(setLaunches(response.data));
        // eslint-disable-next-line no-unused-vars
        }).catch(error => {
            dispatch(setLaunchError());
        });
    };
};