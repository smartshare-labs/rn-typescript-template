import React, { Component } from 'react';
// @ts-ignore
import { Platform, StyleSheet, Text, View } from 'react-native';


interface IProps {

}

interface IState {

}

export default class App extends Component<IProps, IState> {
  render() {
    return (
      <View style={styles.container}>
        <Text> Lets go </Text>
      </View>
    );
  }
}

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