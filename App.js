/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ReduxDemo from './src/ReduxDemo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
const initialState = {
  counter: 0
}

const reducer = (state = initialState, action ) => {
  switch(action.type){
    case 'INCREASE_COUNTER':
    return {counter : state.counter+1}
    case 'DECREASE_COUNTER':
    return {counter : state.counter-1}
  }
  return state;
}
const store = createStore(reducer);

export default class App extends Component<Props> {


  render() {
    return (
      <Provider store={store}>
        <ReduxDemo />
      </Provider>

    );
  }
}