import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class App extends React.Component {

    render() {
      return (
        <View style={styles.container}>
        <Image 
          source={{uri: "https://cdn.iconscout.com/public/images/icon/premium/png-512/business-card-id-identification-3e87bf4e0dc8e389-512x512.png"}}
          style={{width: 100, height: 100}} 
        />
          <RegForm />
          <Text style={styles.baseText}>
          {/* <Text style={styles.titleText}>Sharing your business card just got a lot easier!</Text> */}
          </Text>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#36485f',
      // alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 50,
      paddingRight: 50,
    },
    baseText: {
      fontFamily: 'Cochin',
    },
    titleText: {
      fontSize: 15,
      fontWeight: 'bold',
      color: 'teal'
    }
  });
  