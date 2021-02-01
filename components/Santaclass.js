import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import LottieView from 'lottie-react-native';
export default class Splash extends Component {

    render() {
        return (
            <View>
                <LottieView
                    style={{ flex: 1 }}
                    source={require('../assets/39500-santa-claus.json')}
                    autoPlay
                    loop
                />

            </View>

        );
    }
}