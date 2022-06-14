import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

const SquareCard = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.secondary,
    paddingVertical: 10,
    marginHorizontal: 50,
    backgroundColor: Colors.primary500,
  },
});

export default SquareCard;
