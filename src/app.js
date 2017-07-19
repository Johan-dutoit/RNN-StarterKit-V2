import Navigation from 'react-native-navigation';

import store from './store';
import * as containerNames from './constants/containerNames';
import { registerContainers } from './containers';

export function start() {
    registerContainers();

    Navigation.events().onAppLaunched(() => {
        Navigation.setRoot({
            container: {
                name: containerNames.WELCOME_SCREEN
            }
        });
    });
}