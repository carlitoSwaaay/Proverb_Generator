import { Image, StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const DevotionalScreen = () => {
  return (

      <View style={styles.textContainer}>
      <View style={styles.backgroundContainer}>
        <Image source=
          {require('../assets/2bc93f0f-7867-44d4-bafa-d59f5c51d075.jpeg')}
          resizeMode='stretch'
          style={styles.backgroundImage}
        />
      </View>
    </View>

  )
};

export default DevotionalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});