import { StyleSheet, Text, View, Pressable } from 'react-native'


const DevotionalSubmitButton = ({ children, onPress }) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: 'white' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default DevotionalSubmitButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 29,
    margin: 4,
    overflow: 'hidden',
    elevation: 8,
    shadowRadius: 6,
    shadowOpacity: 0.75,
    shadowOffset: { width: 0, height: 10 },
    shadowColor: 'black',
    opacity: .9,
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
});