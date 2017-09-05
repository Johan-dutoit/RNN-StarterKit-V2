import React, { Component } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles';

import * as actions from './reducer';

class OnboardingScreen extends Component {
    constructor(props) {
        super(props);

        this.onOnboardingCompletePressed = this.onOnboardingCompletePressed.bind(this);
    }

    render() {
        return (
            <View style={styles.root}>
                <Text style={styles.h1}>{this.props.message}</Text>
                <Text style={styles.footer}>{`this.props.containerId = ${this.props.containerId}`}</Text>
                <Button title="Complete onboarding" onPress={this.onOnboardingCompletePressed} />
            </View>
        );
    }

    onOnboardingCompletePressed() {
        this.props.actions.onboardingComplete();
    }
}

function mapStateToProps(state, ownProps) {
    return {
        message: state.onboardingReducer.message,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingScreen);
