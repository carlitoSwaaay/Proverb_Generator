import React from 'react'
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Title from '../ui/Title';

const MainScreen = () => {


  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/testPic.png')} />
      </View>
      <View>
        <Title>Daily Proverb</Title>
      </View>
    </View>

  )
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  // imageContainer: {
  //   borderWidth: 3,
  //   borderColor: '#f8f8f8',
  //   overflow: 'hidden',
  //   margin: 36,
  // },
  // image: {
  //   width: '100%',
  //   height: '100%',
  // },
})