import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Alert, Dimensions, Keyboard } from 'react-native';

export default class GroupCreate extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      text:'',
      submit: '', 
    }
  }
	render() {
    const width = Dimensions.get('window').width;
		return (<View style={styles.container}>
          <TextInput 
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: width}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            onSubmitEditing={Keyboard.dismiss}
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
