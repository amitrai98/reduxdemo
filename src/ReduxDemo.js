/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
type Props = {};
class ReduxDemo extends Component<Props> {

  

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.inceaseCounter()}>
                    <Text style={styles.welcome}>Increment</Text>
                </TouchableOpacity>

                <Text style={styles.instructions}>{this.props.counter}</Text>
                <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                    <Text style={styles.welcome}>Decrement</Text>
                </TouchableOpacity>
            </View>
        ); 
    }
}
function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        inceaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
