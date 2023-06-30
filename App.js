import { StyleSheet, Dimensions } from 'react-native';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProverbScreen from './screens/ProverbScreen';
import MainScreen from './screens/MainScreen';

const Stack = createNativeStackNavigator();

const { width, height } = Dimensions.get('window');






SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn)
  // prevents the splash screen from hiding automatically, call this as early as possible in the app.



export default function App() {




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
      <Stack.Navigator
        screenOptions={
          {
            headerShown: false,
          }}
      >
        <Stack.Screen name='Main' component={MainScreen} />
        <Stack.Screen name='Proverbs' component={ProverbScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({

});
