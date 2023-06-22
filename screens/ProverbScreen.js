import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import shuffle from '../components/Proverbs';

const shuffledArray = require('../components/Proverbs');

const ProverbScreen = () => {

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.container}>
        <Text>Hello World</Text>
    </View>
    </SafeAreaView>
  );

};






export default ProverbScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
});