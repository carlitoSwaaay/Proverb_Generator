import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryButton from './PrimaryButton';
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
    marginLeft: 20,
    marginRight: 20,
    opacity: .9,
  },
  textContainer: {
    backgroundColor: '#d6f2be',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 15,
    padding: 16,
    fontSize: 18,
    overflow: 'hidden',
    fontFamily: 'open-sans-bold',


  },
  button: {
    marginTop: 30,
  },

});