import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Proverbs } from '../components/Proverbs'

const generateRandomId = (min, max) => {
  const randomId = Math.floor(Math.random(Proverbs) * (max - min)) + min;

  return randomId;



  return (
    <View>
      <Text>ProverbScreen</Text>
    </View>
  )
}

export default ProverbScreen

const styles = StyleSheet.create({})