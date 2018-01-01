import * as types from './actionTypes';

export function requestContent() {
    return {
        type: types.HOME_REQUEST
    }
}

export function success(data) {
    return {
        type: types.HOME_SUCCESS,
        competitions: data.competitions,
        polls: data.polls,
        results: data.results
    }
}
