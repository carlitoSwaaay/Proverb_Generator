import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import JournalList from '../components/JournalList'
// import DevotionalScreen from './DevotionalScreen';

const JournalScreen = () => {
  const [entries, setEntries] = useState([]);

  const handleEntrySubmit = (entry) => {
    setEntries((prevEntries) => [...prevEntries, entry])
  };

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.backgroundContainer}>
        <Image source=
          {require('../assets/2bc93f0f-7867-44d4-bafa-d59f5c51d075.jpeg')}
          resizeMode='stretch'
          style={styles.backgroundImage}
        />
      </View>
      <View style={styles.textContainer}>
        <JournalList entries={entries} />
      </View>
    </SafeAreaView>
  )
};

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
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    position: 'absolute',
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
    flex: 1,
    opacity: .9,
    width: '100%',
    height: '100%',
    borderRadius: 10,

  },
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
  },
})