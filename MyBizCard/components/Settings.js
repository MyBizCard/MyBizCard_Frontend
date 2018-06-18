import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Settings extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <List style={styles.titleText}>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36485f',
    },
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'teal'
    },
    textinput: {
      alignSelf: 'stretch',
      height: 40,
      marginBottom: 30,
      color: '#fff',
      borderBottomColor: '#f8f8f8',
      borderBottomWidth: 1
    },
    button: {
      alignSelf: 'stretch',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#59cbbd',
      marginTop: 30
    },
    btntext: {
      color: 'white',
      fontWeight: 'bold'
    }
  });

export default Settings;