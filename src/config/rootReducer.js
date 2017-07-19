import { combineReducers } from 'redux';

import { welcomeReducer } from '../containers/Welcome/reducer';

const rootReducer = combineReducers({
    welcomeReducer
});

export default rootReducer;
