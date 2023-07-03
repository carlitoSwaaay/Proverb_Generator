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
          placeholder='What are your thoughts about this Proverb?'
          autoCorrect={true}
          spellCheck={true}
          // textAlign='left'
          // padding={Platform.OS === 'ios' ? 25 : 10}
          // verticalAlign={Platform.OS === 'ios' ? 'middle' : 'auto'}
          // height={Platform.OS === 'ios' ? 100 : height}
          // marginTop={Platform.OS === 'ios' ? 10 : 30}


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
    marginTop: 40,
    opacity: .9,
  },
  textContainer: {
    backgroundColor: '#d6f2be',
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    overflow: 'hidden',
    fontFamily: 'open-sans-bold',
    textAlign: 'left',
    wordWrap: 'break-word'


  },

});