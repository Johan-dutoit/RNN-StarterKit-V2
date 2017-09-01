import Navigation from 'react-native-navigation';

import store from './store';
import { Provider } from 'react-redux';

import * as containerNames from './constants/containerNames';
import { registerContainers } from './containers';

export default class App {
    constructor() {
        registerContainers(store, Provider);

        Navigation.events().onAppLaunched(() => {
            this.unsubscribe = store.subscribe(this.onStoreUpdate.bind(this));
        });
    }

    onStoreUpdate() {
        var state = store.getState();
        var appReducer = state.appReducer;

        // Wait for the redux store to load before starting the app
        if (appReducer.storeLoaded) {
            this.unsubscribe();
            this.startApp(state);
        }
    }

    startApp(state) {
        //Do something with state
        //i.e. determine if the user has logged in or completed onboarding and set a different root
        Navigation.setRoot({
            container: {
                name: containerNames.WELCOME_SCREEN
            }
        });
    }
}
