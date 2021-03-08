import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import styles from './src/styles/index';

export default class App extends Component {
    render() {
        return (
            <View style={styles.welcome}>
                <Image
                    style={styles.logowelcome}
                    source={require('./assets/logowhite.png')}
                />
            </View>
        );
    }
}
