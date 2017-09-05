import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import { composeWithDevTools } from 'remote-redux-devtools';

import initialState from './config/initialState';
import { storeLoaded } from './config/appReducer';

//  reducers
import rootReducer from './config/rootReducer';

//  middleware
import thunk from 'redux-thunk';

function createReduxStore() {
    var store = {};

    if (process.env === 'development') {
        store = compose(autoRehydrate())(createStore)(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
    } else {
        store = compose(autoRehydrate())(createStore)(rootReducer, initialState, applyMiddleware(thunk));
    }

    var persistConfig = {
        storage: AsyncStorage,
        whitelist: ['onboardingReducer'],
    };

    persistStore(store, persistConfig, storeRehydrated);

    return store;
}

function storeRehydrated() {
    store.dispatch(storeLoaded());
}

let store = createReduxStore();

export default store;