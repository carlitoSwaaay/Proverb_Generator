import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProverbContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.textContainer}>Proverb Container</Text>
      </View>
    </SafeAreaView>
  )
}

export default ProverbContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
    overflow: 'hidden',

  },

});