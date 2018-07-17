import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import QRCode from 'react-native-qrcode';
import { users } from '../config/data';


class UserDetail extends Component {
    render() {
        const { experience, picture, name, email, phone, login, dob, location, user } = this.props.navigation.state.params;

        return (
            <ScrollView style={styles.container}>
                <Tile
                    style={styles.titleText}
                    imageSrc={{ uri: picture.large }}
                    icon={{ name: 'person'}}
                    featured
                    title={`${name.first} ${name.last}`}
                    // title={`${name.first.toUpperCase()} ${name.last.toUpperCase()}`}
                    caption={`${experience.jobTitle} at ${experience.employer}`}
                />
             
                <List>
                    <ListItem
                    title="Email"
                    rightTitle={email}
                    hideChevron
                    />
                    <ListItem
                    title="Phone"
                    rightTitle={phone}
                    hideChevron
                    />
                </List>
        
                <List>
                    <ListItem
                    title="Username"
                    rightTitle={login.username}
                    hideChevron
                    />
                </List>
        
                <List>
                    <ListItem
                    title="Birthday"
                    rightTitle={dob}
                    hideChevron
                    />
                    <ListItem
                    title="City"
                    rightTitle={location.city}
                    hideChevron
                    />
                </List>

                <View style={styles.container2}>
                    <Text style={styles.titleText}>QR Code</Text>
                    <QRCode
                    value={user}
                    size={200}
                    bgColor='purple'
                    fgColor='white'
                    />
                </View>  
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        paddingLeft: 2,
        paddingRight: 2
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
        backgroundColor: '#59cbbd',
        marginTop: 30
    },
    btntext: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default UserDetail;