import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import QRCode from 'react-native-qrcode';
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

            <View style={styles.container2}>
                <Text style={styles.titleText}>QR Code</Text>
                <QRCode
                value={me}
                size={200}
                bgColor='purple'
                fgColor='white'
                />
            </View>
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
    container2: {
        flex: 2,
        backgroundColor: '#36485f',
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 85,
        paddingRight: 50
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 19,
        fontWeight: 'bold',
        color: 'white'
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
        backgroundColor: 'white',
        marginTop: 30
      },
      btntext: {
        color: 'black',
        fontWeight: 'bold'
      }
});

export default Owner;