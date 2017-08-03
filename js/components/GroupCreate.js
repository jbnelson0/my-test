import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default class GroupCreate extends React.Component {
	_onPress() {
		Alert.alert('You Pressed me')
	}
	render() {
		return (<View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPress}
            title="Press Me"
          />
        </View>
        </View>
		)
	}

}


const styles = StyleSheet.create({
  container: {
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 10
  }
})
