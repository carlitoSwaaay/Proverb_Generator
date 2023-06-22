import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View>
      <Image source={require('../assets/testPic.png')} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .9,
  },
});