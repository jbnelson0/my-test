import React, { Component } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';


export default class MemberList extends Component {
	_submit() {
		Alert.alert('You Pushed me')
	}
	render() {
		return(
		<View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._submit}
            title="Push Me"
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