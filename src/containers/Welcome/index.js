import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

// TODO:  To support different layouts for differnt platforms rename index to index.android.js or index.ios.js and create the other.
class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.h1}>React Native Navigation!</Text>
                <Text style={styles.footer}>{`this.props.containerId = ${this.props.containerId}`}</Text>
            </View>
        );
    }
}

export default WelcomeScreen;
