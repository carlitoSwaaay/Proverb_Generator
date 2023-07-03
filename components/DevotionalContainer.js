import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'


const ProverbContainer = () => {


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textContainer}
          multiline={true}
        >

        </TextInput>
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
    padding: 30,
    fontSize: 18,
    overflow: 'hidden',
    fontFamily: 'open-sans-bold',


  },

});