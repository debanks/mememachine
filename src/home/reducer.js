import * as types from './actionTypes'

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export default function home(state = {
    competitions: [],
    polls: [],
    results: []
}, action) {
    switch (action.type) {
        case types.HOME_SUCCESS:
            return Object.assign({}, state, {
                competitions: action.competitions,
                polls: action.polls,
                results: action.results
            });
        default:
            return state
    }
}
