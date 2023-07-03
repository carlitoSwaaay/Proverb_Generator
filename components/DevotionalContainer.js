import { SafeAreaView, ScrollView, StyleSheet, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'



const ProverbContainer = () => {

  const [text, setText] = useState('');
  const [height, setHeight] = useState(0);


  return (


    <SafeAreaView style={styles.rootContainer}>
      <ScrollView keyboardShouldPersistTaps='never'>
        <TextInput
          style={[styles.textContainer, { height: Math.max(35, height) }]}
          // {...props}
          onChangeText={(text) => setText(text)}
          onContentSizeChange={(event) => setHeight(event.nativeEvent.contentSize.height)}
          value={text}
          keyboardAvoidingView='enabled'
          multiline={true}
          placeholder='What are you thoughts about this Proverb?'
          autoCorrect={true}
          spellCheck={true}
          textAlign='left'
          padding={Platform.OS === 'ios' ? 30 : 10}
          verticalAlign='top'

        >
        </TextInput>

      </ScrollView>
    </SafeAreaView>
  )

};

export default ProverbContainer;


const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 4,
    // marginRight: 4,
    marginTop: 30,
    opacity: .9,
  },
  textContainer: {
    backgroundColor: '#d6f2be',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 15,
    height: 100,
    padding: 30,
    fontSize: 18,
    overflow: 'hidden',
    fontFamily: 'open-sans-bold',


  },

});