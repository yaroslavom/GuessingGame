import { View, Text, Pressable, StyleSheet } from "react-native";

const PrimaryButton = ({ children, pressHandler, successColor }) => {
  const combineStyles = StyleSheet.flatten([
    styles.container,
    successColor ? styles.greenColor : styles.yaleColor,
  ]);

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) => pressed ? [styles.pressed, combineStyles] : combineStyles}
        onPress={pressHandler}
        android_ripple={
          successColor ? styles.pressedGreenColor : styles.pressedYaleColor
        }
      >
        <Text style={styles.text}>{children}</Text>
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    shadowOpacity: 0.4,
  },
  greenColor: {
    backgroundColor: "#2e8857",
  },
  yaleColor: {
    backgroundColor: "#0e4c92",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
  pressedGreenColor: {
    color: "#266643",
  },
  pressedYaleColor: {
    color: "#0d3c73",
  },
  pressed: {
    opacity: 0.9
  }
});

export default PrimaryButton;
