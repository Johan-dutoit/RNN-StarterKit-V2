import Navigation from 'react-native-navigation';

import * as containerNames from '../constants/containerNames';
import WelcomeScreen from './WelcomeScreen';

export function registerContainers() {
    Navigation.registerContainer(containerNames.WELCOME_SCREEN, () => WelcomeScreen);
}
