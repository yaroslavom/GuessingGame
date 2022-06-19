import { Text, View, StyleSheet, Dimensions } from "react-native";
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

const devicesWidth = Dimensions.get("window").width;

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
    height: devicesWidth < 380 ? 75 : 100,
    width: devicesWidth < 380 ? 75 : 100,
    borderWidth: 3,
    borderColor: Colors.primary500,
    borderRadius: 50,
    backgroundColor: Colors.white,
    justifyContent: "center",
  },
  numberText: {
    color: Colors.primary500,
    fontSize: devicesWidth < 380 ? 36 : 40,
    fontFamily: "open-sans-bold",
    textAlign: "center",
  },
});

export default NumberContainer;
