import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button, 
    Image
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';

class CardHolder extends Component {
    onLearnMore = (user) => {
        this.props.navigation.navigate('Details', { ...user });
    };
    
    render() {
        return (
            <ScrollView style={styles.container}>
                <List style={styles.textinput}>
                {users.map((user) => (
                    <ListItem
                    key={user.login.username}
                    roundAvatar
                    avatar={{ uri: user.picture.thumbnail }}
                    title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
                    subtitle={`${user.experience.jobTitle} at ${user.experience.employer}`}
                    onPress={() => this.onLearnMore(user)}
                    />
                ))}
                </List>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36485f',
      paddingTop: 10,
      paddingBottom: 10
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
module.exports = CardHolder