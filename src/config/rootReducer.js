import { combineReducers } from 'redux';

import appReducer from './appReducer';
import onboardingReducer from '../containers/Onboarding/reducer';
import welcomeReducer from '../containers/Welcome/reducer';

const rootReducer = combineReducers({
    appReducer,
    onboardingReducer,
    welcomeReducer
});

export default rootReducer;
