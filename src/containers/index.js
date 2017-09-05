import React, { Component } from 'react';
import Navigation from 'react-native-navigation';

import * as containerNames from '../constants/containerNames';
import WelcomeScreen from './Welcome';
import OnboardingScreen from './Onboarding';

let containers = [
    { name: containerNames.WELCOME_SCREEN, generator: () => WelcomeScreen },
    { name: containerNames.ONBOARDING_SCREEN, generator: () => OnboardingScreen }
]

export function registerContainers(store, Provider) {
    containers.map(container => registerContainerWithRedux(container.name, container.generator, store, Provider));

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
    Navigation.registerContainer(containerName, generator);
}