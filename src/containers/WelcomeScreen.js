import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import Navigation from 'react-native-navigation';

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

//TODO:  Consider moving styles out into it's own directory/file

const styles = {
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    h1: {
        fontSize: 24,
        textAlign: 'center',
        margin: 30
    },
    footer: {
        fontSize: 10,
        color: '#888',
        marginTop: 10
    }
};
