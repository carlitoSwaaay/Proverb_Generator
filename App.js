import { StyleSheet, View, ImageBackground, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import MainScreen from './screens/MainScreen';
import ProverbScreen from './screens/ProverbScreen';

import * as SplashScreen from 'expo-splash-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';

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
    <>
      <StatusBar style="auto" />
    <View style={styles.container}>
        <MainScreen />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
