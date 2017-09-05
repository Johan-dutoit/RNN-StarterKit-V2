import { createReducer } from 'redux-create-reducer';

const ONBOARDING_COMPLETE = 'ONBOARDING_COMPLETE'


export default reducer = createReducer({}, {
    [ONBOARDING_COMPLETE](state = {}, action) {
        return {
            ...state,
            complete: true
        }
    }
});

export function onboardingComplete() {
    return {
        type: ONBOARDING_COMPLETE
    }
}