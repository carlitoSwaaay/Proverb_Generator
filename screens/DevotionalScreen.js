import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DevotionalScreen = ({ }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text>DevotionalScreen</Text>
      </View>
    </View>
  )
};

export default DevotionalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});