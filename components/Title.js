import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.secondary,
    textAlign: "center",
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: Colors.secondary,
  },
});

export default Title;
