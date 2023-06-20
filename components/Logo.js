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
    width: 450,
    height: 450,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',


  },
});