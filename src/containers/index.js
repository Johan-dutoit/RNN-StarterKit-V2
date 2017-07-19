import React, { Component } from 'react';
import Navigation from 'react-native-navigation';

import * as containerNames from '../constants/containerNames';
import WelcomeScreen from './Welcome';

export function registerContainers(store, Provider) {
    registerContainerWithRedux(containerNames.WELCOME_SCREEN, () => WelcomeScreen, store, Provider)
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

    Navigation.registerContainer(containerName, generatorWrapper);
    return generatorWrapper;
}