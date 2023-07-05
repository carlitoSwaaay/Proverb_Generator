import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, TextInput, Platform } from 'react-native'



const ProverbContainer = ({ onSubmit }) => {

  const [entry, setEntry] = useState('');

  const [height, setHeight] = useState(0);

  const handleTextChange = (text) => {
    setEntry(text);
  };

  const handleSubmit = () => {
    onSubmit(entry);
    setEntry('');
  };


  return (
    <SafeAreaView style={styles.rootContainer}>
      <ScrollView keyboardShouldPersistTaps='never'>
        <TextInput
          style={[styles.textContainer, { height: Math.max(35, height) }]}
          // {...props}
          textAlign='left'
          multiline={true}
          spellCheck={true}
          verticalAlign='top'
          value={entry}
          autoCorrect={true}
          keyboardAvoidingView='enabled'
          placeholder='What are your thoughts?'
          onChangeText={handleTextChange}
          onContentSizeChange={(event) => setHeight(event.nativeEvent.contentSize.height)}
          padding={Platform.OS === 'ios' ? 10 : 10}
          marginTop={Platform.OS === 'ios' ? 30 : 30}
          width={Platform.OS === 'android' ? 350 : 330}


        />
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