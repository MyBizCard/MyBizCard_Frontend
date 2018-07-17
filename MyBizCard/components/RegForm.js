import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
// import { AsyncResource } from 'async_hooks';
import multi_set_pairs from '../config/data';

export default class RegForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName:'',
      email:'',
      password:'',
      picture: ''
    }
  }

  updateValue(text, field) {
    if(field === 'fullName') {
      this.setState({
        fullName: text
      })
    } else if (field === 'email') {
      this.setState({
        email: text
      })
    } else if(field === 'password') {
      this.setState({
        password: text
      })
    } else if(field === 'picture') {
      this.setState({
        picture: text
      })
    }
  }

  handleSubmit() {
    // let collection = {};
    // collection.fullName = this.state.fullName;
    // collection.email = this.state.email;
    // collection.password = this.state.password;
    // console.warn(collection);
    const { fullName, email, password, picture } = this.state;
    console.warn(multi_set_pairs)
    let newUserNum = 4;

    let newUser = {
      fullName,
      email,
      password,
      picture
    };
    AsyncStorage.multiSet(
      ['UID' + newUserNum + '_object', JSON.stringify(newUser)]
    )
    // console.log('THIS IS ALL THE DATA IN ASYNC STORAGE',showAsyncStorageContentInDev())
  }

  render() {
    return (
      <View style={styles.regform}>

        <Text style={styles.header}>Registration</Text>

        <TextInput 
          style={styles.textinput} 
          placeholder="Your full name" 
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.updateValue(text,'fullName')}
        />

        <TextInput 
          style={styles.textinput} 
          placeholder="Your email" 
          underlineColorAndroid={'transparent'}
          onChangeText={(text) => this.updateValue(text,'email')}
         />

        <TextInput 
        style={styles.textinput} 
        placeholder="Your password" 
        underlineColorAndroid={'transparent'} 
        onChangeText={(text) => this.updateValue(text,'password')}/>

        <TextInput 
        style={styles.textinput} 
        placeholder="Your picture url" 
        underlineColorAndroid={'transparent'} 
        onChangeText={(text) => this.updateValue(text,'picture')}/>

        <TouchableOpacity style={styles.button} onPress={() => this.handleSubmit()}>
          <Text style={styles.btntext}>Submit</Text>
        </TouchableOpacity> 
 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
    alignSelf: 'stretch'
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: 'black',
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


module.exports = RegForm