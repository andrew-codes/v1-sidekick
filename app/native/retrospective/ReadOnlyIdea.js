import React, { Component, StyleSheet, View, Text } from 'react-native';
import Button from 'react-native-button';

export default class extends Component {
  render() {
    const {
      text
      } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 7
  },
  text: {
    fontSize: 24
  }
});
