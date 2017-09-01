import { combineReducers } from 'redux';

import welcomeReducer from '../containers/Welcome/reducer';
import appReducer from './appReducer';

const rootReducer = combineReducers({
    appReducer,
    welcomeReducer
});

export default rootReducer;
