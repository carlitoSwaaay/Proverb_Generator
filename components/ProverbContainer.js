import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import Shuffle from './ProverbList';

const Shuffle = require('./ProverbList');

const ProverbContainer = () => {

  const shuffledArray = Shuffle(PROVERBS);
  console.log(shuffledArray);


  return (
    <SafeAreaView>
      <View style={styles.container}>
      <Text style={styles.textContainer}>{shuffledArray[0].proverb}</Text>
      </View>
    </SafeAreaView>
  )

};

export default ProverbContainer;


const styles = StyleSheet.create({
  container: {

    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 16,
    fontSize: 16,
    overflow: 'hidden',

  },

});