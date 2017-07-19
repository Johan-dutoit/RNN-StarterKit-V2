import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

// TODO:  To support different layouts for differnt platforms rename index to index.android.js or index.ios.js and create the other.
class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.h1}>{this.props.message}</Text>
                <Text style={styles.footer}>{`this.props.containerId = ${this.props.containerId}`}</Text>
            </View>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        message: state.welcomeReducer.message
    };
}

export default connect(mapStateToProps)(WelcomeScreen);
