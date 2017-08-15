import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


export default class MemberList extends Component {
  constructor(props){
    super(props)
    this.state= {
      data: 'hi',
      datas: 'hello'
    } 
  }
	render() {
    const { data, datas } = this.state
		return (
		<View style={styles.container}>
          <FlatList
            style={styles.buttonContainer}
            data={[{key: data}, {key: datas}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
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