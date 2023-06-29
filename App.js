import { StyleSheet, View, ImageBackground, SafeAreaView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import ProverbScreen from './screens/ProverbScreen';
import MainScreen from './screens/MainScreen';
import PrimaryButton from './components/PrimaryButton';
import ProverbContainer from './components/ProverbContainer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn)
  // prevents the splash screen from hiding automatically, call this as early as possible in the app.



export default function App(props) {

  // const [buttonPressed, setButtonPressed] = useState(false);


  const [fontsLoaded] = useFonts({
    "open-sans": require('./assets/fonts/OpenSans-Regular.ttf'),
    "open-sans-bold": require('./assets/fonts/OpenSans-Bold.ttf'),
  }); 

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync();
    }
    if (fontsLoaded) {
      hideSplashScreen();
    }
  }, [!fontsLoaded]);

  // This is the function that will be called to hide the splash screen.

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <ImageBackground source=
          {require('./assets/2bc93f0f-7867-44d4-bafa-d59f5c51d075.jpeg')}
          resizeMode="stretch"
          style={styles.rootScreen}
        >
        </ImageBackground>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#f8f8f8',
  },
});
