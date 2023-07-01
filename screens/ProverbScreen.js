import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProverbContainer from '../components/ProverbContainer';
import PrimaryButton from '../components/PrimaryButton';
import BackButton from '../components/BackButton';
import DevotionalScreen from './DevotionalScreen';



// const generateRandomId = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }

const ProverbScreen = ({ navigation, route, Devotional }) => {

  return (
    <View style={styles.rootContainer}>
      <View style={styles.backgroundContainer}>
        <Image source=
          {require('../assets/2bc93f0f-7867-44d4-bafa-d59f5c51d075.jpeg')}
          resizeMode='stretch'
          style={styles.backgroundImage}
        />
      </View>

      <ScrollView style={styles.container} bounces='true'>{route.params.name}</ScrollView>

      <ProverbContainer />
      <View style={styles.button}>
        <BackButton onPress={() => { navigation.navigate('Devotional', { name: Devotional }) }}>Devotional</BackButton>
      </View>
    </View>
  );
};

export default ProverbScreen;

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
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    marginTop: 30,
  },
});








// export default ProverbScreen;

// const styles = StyleSheet.create({
//   rootContainer: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
// });