import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const PrimaryButton = ({ children, pressHandler, successColor, textLarge }) => {
  const combineStyles = StyleSheet.flatten([
    styles.container,
    successColor ? styles.greenColor : styles.yaleColor,
  ]);

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.pressed, combineStyles] : combineStyles
        }
        onPress={pressHandler}
        android_ripple={
          successColor ? styles.pressedGreenColor : styles.pressedYaleColor
        }
      >
        <Text style={[styles.text, textLarge ? styles.textLarge : styles.textSmall]}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    elevation: 2,
    width: 110,
    borderRadius: 25,
  },
  outerContainer: {
    marginVertical: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  greenColor: {
    backgroundColor: Colors.success500,
  },
  yaleColor: {
    backgroundColor: Colors.info500,
  },
  text: {
    color: Colors.white,
    textAlign: "center",
    lineHeight: 24,
  },
  textSmall: {
    fontSize: 18,
    fontFamily: 'open-sans'
  },
  textLarge: {
    fontSize: 24,
    fontFamily: 'open-sans-bold'
  },
  pressedGreenColor: {
    color: Colors.success600,
  },
  pressedYaleColor: {
    color: Colors.info600,
  },
  pressed: {
    opacity: 0.9,
  },
});

export default PrimaryButton;
