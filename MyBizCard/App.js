import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation'
import RegForm from './components/RegForm';
import CardHolder from './components/CardHolder'
import { Root, Tabs } from './config/router';

class App extends Component {
  render() {
    return <Root />;
  }
}

export default App;