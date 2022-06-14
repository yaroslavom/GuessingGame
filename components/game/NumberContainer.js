import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import ShadowWrapper from "../ui/ShadowWrapper";

const NumberContainer = ({ children }) => {
  return (
    <ShadowWrapper slight>
      <View style={styles.container}>
        <View style={styles.circleContainer}>
          <Text style={styles.numberText}>{children}</Text>
        </View>
      </View>
    </ShadowWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.secondary,
    paddingVertical: 15,
    marginVertical: 25,
    marginHorizontal: 75,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  circleContainer: {
    height: 75,
    width: 75,
    borderWidth: 3,
    borderColor: Colors.primary500,
    borderRadius: 50,
    backgroundColor: Colors.white,
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
    textAlign: "center",
  },
});

export default NumberContainer;
