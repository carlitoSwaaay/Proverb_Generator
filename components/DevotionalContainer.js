import { SafeAreaView, ScrollView, StyleSheet, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'



const ProverbContainer = (props) => {

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
          // value={text}
          keyboardAvoidingView='enabled'
          multiline={true}
          placeholder='What are your thoughts?'
          autoCorrect={true}
          spellCheck={true}
          textAlign='left'
          padding={Platform.OS === 'ios' ? 10 : 10}
          verticalAlign='top'
          marginTop={Platform.OS === 'ios' ? 30 : 30}
          width={Platform.OS === 'android' ? 350 : 330}


        >
        </TextInput>

      </ScrollView>
    </SafeAreaView>
  )

};

export default ProverbContainer;


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 4,
    // marginRight: 4,
    marginTop: 40,
    marginBottom: Platform.OS === 'ios' ? 80 : 60,
    opacity: .9,
  },
  textContainer: {
    backgroundColor: '#d6f2be',
    // borderColor: 'black',
    borderRadius: 15,
    // borderWidth: 2,
    padding: 20,
    fontSize: 18,
    overflow: 'hidden',
    fontFamily: 'open-sans-bold',
    textAlign: 'left',


  },

});