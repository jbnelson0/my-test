import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './js/components/Main'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Hello</Text>
        <Main />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#454545',
  },
});
