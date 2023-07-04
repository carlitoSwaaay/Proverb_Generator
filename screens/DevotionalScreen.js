import { Image, Platform, StyleSheet, TextInput, View, } from 'react-native'
import React from 'react'
import ProverbContainer from '../components/ProverbContainer';
import DevotionalContainer from '../components/DevotionalContainer';
import DevotionalSubmitButton from '../components/DevotionalSubmitButton';
import JournalScreen from './JournalScreen';


const DevotionalHandler = () => {
  const [inputText, setInputText] = useState('');
  const [devotional, setDevotional] = useState([]);

};

const DevotionalScreen = ({ navigation, Journal }) => {
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
        <DevotionalContainer />
      </View>
      <View style={styles.button}>
        <DevotionalSubmitButton
          style={styles.button}
          onPress={() => navigation.navigate('Journal', { name: Journal })}
        >
          Add to Journal
        </DevotionalSubmitButton>
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
    marginTop: 200,

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
    marginBottom: Platform.OS === 'ios' ? 300 : 100,
  },

});