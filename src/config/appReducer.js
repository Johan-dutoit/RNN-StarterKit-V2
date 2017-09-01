import { createReducer } from 'redux-create-reducer';

const STORE_LOADED = 'STORE_LOADED';

export default reducer = createReducer({}, {
    [STORE_LOADED](state = {}, action) {
        return {
            ...state,
            storeLoaded: true
        }
    }
});

export function storeLoaded() {
    return {
        type: STORE_LOADED
    }
}