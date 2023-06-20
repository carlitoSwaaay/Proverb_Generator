import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import PrimaryButton from '../ui/PrimaryButton';

const MainScreen = () => {


  return (
    <View >
      <View >
        <Logo />
      </View>
      <View>
        <PrimaryButton>
          <Text style={styles.primaryButton}>Daily Proverb</Text>
        </PrimaryButton>
      </View>
    </View>

  )
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  primaryButton: {
    fontFamily: Platform.select({ ios: 'Avenir', android: 'Roboto' }),
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    borderWidth: Platform.select({ ios: 0, android: .5 }),
    borderRadius: 20,
    padding: 12,
  },
})