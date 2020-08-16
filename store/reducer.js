import * as actionTypes from './actionTypes';

const initialState = {
    developer: 'SDH',
    sidebar: {
        filters: {
            years: [
                2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
            ],
            successfulLaunch: true,
            successfulLanding: true,
        },
    },
    appliedFilter: {
        year: '',
        successfulLaunch: null,
        successfulLanding: null,
    },
    launchData: [],
    error: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_LAUNCH_DATA:
            const newData = [];
            if (action.payload) {
                action.payload.map((data) => {
                    newData.push(data);
                });
            }
            return {
                ...state,
                launchData: [...newData],
            };
        
        case actionTypes.SET_LAUNCH_DATA:
            return {
                ...state,
                launchData: [ ...action.payload ],
                error: false,
            };

        case actionTypes.SET_LAUNCH_ERROR:
            return {
                ...state,
                error: true,
            };

        case actionTypes.SET_FILTER_DATE:
            return {
                ...state,
                appliedFilter: {
                    ...state.appliedFilter,
                    year: action.payload,
                },
            };

        case actionTypes.REMOVE_FILTER_DATE:
            return {
                ...state,
                appliedFilter: {
                    ...state.appliedFilter,
                    year: '',
                },
            };
        
        case actionTypes.SET_FILTER_LAUNCH:
            return {
                ...state,
                appliedFilter: {
                    ...state.appliedFilter,
                    successfulLaunch: action.payload,
                },
            };

        case actionTypes.REMOVE_FILTER_LAUNCH:
            return {
                ...state,
                appliedFilter: {
                    ...state.appliedFilter,
                    successfulLaunch: null,
                },
            };

        case actionTypes.SET_FILTER_LAND:
            return {
                ...state,
                appliedFilter: {
                    ...state.appliedFilter,
                    successfulLanding: action.payload,
                },
            };

        case actionTypes.REMOVE_FILTER_LAND:
            return {
                ...state,
                appliedFilter: {
                    ...state.appliedFilter,
                    successfulLanding: null,
                },
            };
    

        default:
            return state;

    }
}

export default reducer;