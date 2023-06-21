import { StyleSheet, Text, View, Pressable } from 'react-native'


const PrimaryButton = ({ children, onPress }) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: 'green' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
    elevation: 8,
    shadowRadius: 6,
    shadowOpacity: 0.75,
    shadowOffset: { width: 0, height: 8 },
    shadowColor: 'black',
  },
  buttonInnerContainer: {
    backgroundColor: '#662d91' /* add color file */,
    paddingVertical: 8,
    paddingHorizontal: '25%',

  },
  buttonText: {
    fontFamily: 'open-sans-bold',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  pressed: {
    opacity: 0.75,
    color: 'white',
  },
  // fontFamily: Platform.select({ ios: 'Avenir', android: 'Roboto' }),
  // fontSize: 26,
  // fontWeight: 'bold',
  // color: 'black',
  // textAlign: 'center',
  // borderWidth: Platform.select({ ios: 0, android: .5 }),
  // borderRadius: 20,
  // padding: 12,
});