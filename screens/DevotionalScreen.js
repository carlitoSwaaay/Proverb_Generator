import { Image, StyleSheet, TextInput, View, } from 'react-native'
import React from 'react'
import ProverbContainer from '../components/ProverbContainer';
import DevotionalContainer from '../components/DevotionalContainer';

const DevotionalScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.backgroundContainer}>
        <Image source=
          {require('../assets/2bc93f0f-7867-44d4-bafa-d59f5c51d075.jpeg')}
          resizeMode='stretch'
          style={styles.backgroundImage}
        />
      </View>

      <DevotionalContainer>
        <TextInput>Devotional Screen</TextInput>
      </DevotionalContainer>



      <View style={styles.button}>
        {/* <BackButton onPress={() => { navigation.navigate('Devotional', { name: Devotional }) }}>Devotional</BackButton> */}
      </View>
    </View>

  )
};

export default DevotionalScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f8f8f8',
  },
  container: {
    flex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    padding: 20,

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

});