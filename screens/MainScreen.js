import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

import Logo from '../components/Logo';
import PrimaryButton from '../components/PrimaryButton';
import ProverbScreen from './ProverbScreen';


const MainScreen = () => {

  const [initialProverb, setInitialProverb] = useState('');

  const inputHandler = () => {
    <ProverbScreen />


  };


  return (
    <View style={styles.rootContainer} >
      <View style={styles.imageContainer} >
        <Logo />
      </View>
      <View>
        <PrimaryButton onPress={inputHandler}>
          <Text>Daily Proverb</Text>
        </PrimaryButton>
      </View>
    </View>

  )
}

export default MainScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  imageContainer: {
    flex: .75,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    margin: 10,
  },
})