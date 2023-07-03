import { KeyboardAvoidingView, SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'


const ProverbContainer = () => {


  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        style={styles.container}
        keyboardShouldPersistTaps='handled'
      >
        <TextInput
          style={styles.textContainer}
          keyboardAvoidingView='enabled'
          multiline={true}
          placeholder='What are you thoughts about this proverb?'
          autoCorrect={true}
          spellCheck={true}
          textAlign='left'
        >

        </TextInput>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )

};

export default ProverbContainer;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 4,
    marginRight: 4,
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