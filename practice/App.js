import React from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

export default class App extends React.Component {
    
    state = {
        index: 0,
        routes: [
            { key: '1', title: 'First' },
            { key: '2', title: 'Second' },
        ],
    };

    _handleIndexChange = index => this.setState({ index });
 
     _renderHeader = props => <TabBar {...props} />;
 
    _renderScene = SceneMap({
        '1': FirstRoute,
        '2': SecondRoute,
    });
    
    _onPressButton() {
    Alert.alert("hello")

  }
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={this._onPressButton}>
                <Text>Open up App.js to starghfght woffdfgcvbrking on your app!</Text>
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
