import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProverbContainer from '../components/ProverbContainer';


// const generateRandomId = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }

const ProverbScreen = ({ navigation, route }) => {

  return (
    <View>
      <View>
        <Text style={styles.container}>{route.params.name}</Text>
      </View>
    </View>
  );
};

export default ProverbScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
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