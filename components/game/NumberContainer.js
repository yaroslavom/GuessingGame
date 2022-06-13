import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    backgroundColor: Colors.primary500,
    padding: 25,
    margin: 25,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.secondary,
    fontSize: 36,
    fontWeight: 'bold'
  },
});

export default NumberContainer;
