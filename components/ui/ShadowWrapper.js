import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const ShadowWrapper = ({ children, slight }) => {
  return (
    <View style={slight ? styles.slightShadow : styles.significantShadow}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  slightShadow: {
    elevation: 3, // shadow for android
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  significantShadow: {
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    shadowOpacity: 0.4,
  },
});

export default ShadowWrapper;
