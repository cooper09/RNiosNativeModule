/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

var stringProvider = require('NativeModules').StringProvider;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//type Props = {};
export default class App extends Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      message: "Hi there!"
    }  
    stringProvider.getSomeString( mystring =>{
      alert("What we get from Native module: "+ mystring );
      this.setState({message:mystring})
    }); 
  }//end constructor

  target = 10+ Math.floor(40 * Math.random())

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Cooper's React Native with Native IOS!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Text style={styles.target}>{this.target}</Text>
        <Text>Native Code is here: {this.state.message} </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33F5F0',
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
  target: {
    fontSize: 40,
    backgroundColor: '#aaa',
    marginHorizontal: 10,
    textAlign: 'center', 
    padding: 10,
  },
});
