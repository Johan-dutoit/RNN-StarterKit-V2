import React, { Component } from 'react';
import Navigation from 'react-native-navigation';

import * as containerNames from '../constants/containerNames';
import WelcomeScreen from './Welcome';

export function registerContainers(store, Provider) {
    registerContainerWithRedux(containerNames.WELCOME_SCREEN, () => WelcomeScreen, store, Provider)

    // To register a container without redux:
    // Navigation.registerContainer(containerNames.WELCOME_SCREEN, () => WelcomeScreen);
    //  OR
    // registerContainer(containerNames.WELCOME_SCREEN, () => WelcomeScreen)
}

function registerContainerWithRedux(containerName, generator, store, Provider) {
    const generatorWrapper = function () {
        const InternalComponent = generator();

        return class extends React.Component {
            render() {
                return (
                    <Provider store={store}>
                        <InternalComponent {...this.props} />
                    </Provider>
                );
            }
        }
    };

    registerContainer(containerName, generatorWrapper);
    return generatorWrapper;
}

function registerContainer(containerName, generator) {
    Navigation.registerContainer(containerName, generatorWrapper);
}