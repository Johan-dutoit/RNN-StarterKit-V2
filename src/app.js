import Navigation from 'react-native-navigation';

import store from './store';
import { Provider } from 'react-redux';

import * as containerNames from './constants/containerNames';
import { registerContainers } from './containers';

export default class App {
    onboardingStarted = false;

    constructor() {
        registerContainers(store, Provider);

        Navigation.events().onAppLaunched(() => {
            this.unsubscribe = store.subscribe(this.onStoreUpdate.bind(this));
        });
    }

    onStoreUpdate() {
        let state = store.getState();
        let appReducer = state.appReducer;

        // Wait for the redux store to load before starting the app
        if (appReducer.storeLoaded) {
            this.startApp(state);
        }
    }

    startApp(state) {
        //Do something with state
        //i.e. determine if the user has logged in or has completed onboarding and start a different app

        if (state.onboardingReducer.complete) {
            //Unsubscribe from store updates, as we no longer want to receive them here
            this.unsubscribe();
            this.startDefaultApp();
        } else if (!this.onboardingStarted) {
            onboardingStarted = true;
            this.startOnboardingApp();
        }
    }

    startDefaultApp() {

        Navigation.pop
        Navigation.setRoot({
            bottomTabs: [
                {
                    container: {
                        name: containerNames.WELCOME_SCREEN,
                        passProps: {
                            text: 'This is tab 1',
                        }
                    }
                },
                {
                    container: {
                        name: containerNames.WELCOME_SCREEN,
                        passProps: {
                            text: 'This is tab 2'
                        }
                    }
                }
            ]
        });
    }

    startOnboardingApp() {
        Navigation.setRoot({
            container: {
                name: containerNames.ONBOARDING_SCREEN
            }
        });
    }
}
