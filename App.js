import { StyleSheet, View, ImageBackground, SafeAreaView, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import MainScreen from './screens/MainScreen';
import ProverbScreen from './screens/ProverbScreen';

import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import PrimaryButton from './components/PrimaryButton';
import ProverbContainer from './components/ProverbContainer';


SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn)
  // prevents the splash screen from hiding automatically, call this as early as possible in the app.



export default function App() {

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






  let screen = <MainScreen />;

  // if (buttonPressed) {
  //   screen = (
  //     <ProverbScreen onPress={buttonPressed} />
  //   );
  // };






  return (
    <>
      <StatusBar style="light" />
      <ImageBackground source={require('./assets/2bc93f0f-7867-44d4-bafa-d59f5c51d075.jpeg')}
        resizeMode="stretch"
        style={styles.rootScreen}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#f8f8f8',
  },
});
