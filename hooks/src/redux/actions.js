import * as actions from './actionTypes';

export function bugAdded(description) {
    return {
        type: actions.BUD_ADDED,
        payload: {
            description
        }
    };
}

export function bugResolved(id) {
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id
        }
    }
}