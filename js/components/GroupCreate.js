import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Alert, Dimensions } from 'react-native';

export default class GroupCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text:'' }
  }
	_onPress() {
		Alert.alert('You Pressed me')
    console.log('pressed')
	}
	render() {
    const width = Dimensions.get('window').width;
		return (<View style={styles.container}>
          <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: width}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
		)
	}

}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderColor: '#000000',
    borderWidth: 1,
  },
})
