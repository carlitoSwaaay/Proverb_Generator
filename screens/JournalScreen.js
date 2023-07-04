import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DevotionalScreen from './DevotionalScreen';

const JournalScreen = ({ data }) => {


  return (
    <View style={styles.rootContainer}>
      <View style={styles.backgroundContainer}>
        <Image source=
          {require('../assets/2bc93f0f-7867-44d4-bafa-d59f5c51d075.jpeg')}
          resizeMode='stretch'
          style={styles.backgroundImage}
        />
      </View>

      <View style={styles.textContainer}>
        <FlatList
          style={styles.container}
          data={data}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

    </View>
  )
}

export default JournalScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f8f8f8',
  },
  container: {

    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    borderColor: 'black',
    opacity: .9,

  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    // opacity: .5,
  },
  textContainer: {
    padding: 30,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,

  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
  },
})