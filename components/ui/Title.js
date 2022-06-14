import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

const Title = ({ children, small }) => {
  return <Text style={[styles.text, small ? styles.small : styles.medium]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    color: Colors.secondary,
  },
  small: {
      fontSize: 22,
      fontFamily: 'open-sans'
  },
  medium: {
    fontSize: 24,
    fontFamily: 'open-sans-bold'
  }
});
export default Title;
