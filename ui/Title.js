import { Text, StyleSheet, Platform } from "react-native";


const Title = ({ children }) => {

  return <Text style={styles.title}>{children}</Text>;

};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: Platform.select({ ios: 'Avenir', android: 'Roboto' }),
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderRadius: 6,
    borderColor: 'black',
    padding: 12,
  },
});