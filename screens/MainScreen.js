import React, { useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

import Logo from '../components/Logo';
import PrimaryButton from '../components/PrimaryButton';
import ProverbScreen from './ProverbScreen';

// const BackgroundImage = () => {
//   return (
//     <View style={styles.container}>
//       <ImageBackground source=
//         {require('../assets/2bc93f0f-7867-44d4-bafa-d59f5c51d075.jpeg')}
//         resizeMode='stretch'
//         style={styles.backgroundImage}
//       />
//     </View>)
// };


const MainScreen = ({ navigation, Proverbs }) => {



  return (


    <View style={styles.rootContainer} >
      <View style={styles.backgroundContainer}>
        <Image source=
          {require('../assets/2bc93f0f-7867-44d4-bafa-d59f5c51d075.jpeg')}
          resizeMode='stretch'
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.imageContainer} >
        <Logo />
      </View>
      <View>
        <PrimaryButton onPress={() => navigation.navigate('Proverbs', { name: Proverbs })}>
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
    // backgroundColor: '#f8f8f8',
  },
  imageContainer: {
    flex: .65,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    margin: 20,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // opacity: .5,
  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
  },
})