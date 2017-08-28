import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';

export default class App extends React.Component {
    _onPressButton() {
    Alert.alert("hello")

  }
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this._onPressButton}>
                <Text>Open up App.js to start woffdfgcvbrking on your app!</Text>
                <Text style={styles.text}>Hello!df</Text>
            </TouchableOpacity>
            <Button
                style={styles.button}
                containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'green'}}
                onPress={this._onPressButton}>
                Hello
            </Button>
            <Text>Shake your phone to open the developer menu.</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ec9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {

    color: 'green',
    marginBottom: '20%'
  },

  button: {
    fontSize: 20,
    color: 'white',
    
  }
});
