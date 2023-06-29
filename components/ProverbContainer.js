import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Shuffle from './ProverbList';



const ProverbContainer = (Shuffle) => {



  return (
    // <SafeAreaView style={styles.container}>
      <View>
      <Shuffle />
      </View>
    // </SafeAreaView>
  )

};

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
    fontSize: 11,
    overflow: 'hidden',

  },

});