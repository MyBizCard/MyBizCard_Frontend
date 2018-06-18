import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class Owner extends Component {
    handleSettingsPress = () => {
        this.props.navigation.navigate('Settings');
    };

    render() {
        return (
        <ScrollView style={styles.container}>
            <Tile
            imageSrc={{ uri: this.props.picture.large}}
            featured
            title={`${this.props.name.first.toUpperCase()} ${this.props.name.last.toUpperCase()}`}
            caption={`${this.props.experience.jobTitle} at ${this.props.experience.employer}`}
            />

            <Button
            title="Settings"
            buttonStyle={{ marginTop: 20 }}
            onPress={this.handleSettingsPress}
            />

            <List>
            <ListItem
                title="Email"
                rightTitle={this.props.email}
                hideChevron
            />
            <ListItem
                title="Phone"
                rightTitle={this.props.phone}
                hideChevron
            />
            </List>

            <List>
            <ListItem
                title="Username"
                rightTitle={this.props.login.username}
                hideChevron
            />
            </List>

            <List>
            <ListItem
                title="Birthday"
                rightTitle={this.props.dob}
                hideChevron
            />
            <ListItem
                title="City"
                rightTitle={this.props.location.city}
                hideChevron
            />
            </List>
        </ScrollView>
        );
    }
}

Owner.defaultProps = { ...me };

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

export default Owner;