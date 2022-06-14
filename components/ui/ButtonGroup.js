import { View, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

const ButtonGroup = ({ leftBtnName, rightBtnName, leftBtnHandler, rightBtnHandler, textLarge }) => {
  return (
    <View style={styles.buttonGroup}>
      <View style={styles.button}>
        <PrimaryButton textLarge={textLarge} successColor pressHandler={leftBtnHandler}>
          {leftBtnName}
        </PrimaryButton>
      </View>
      <View style={styles.button}>
        <PrimaryButton textLarge={textLarge} pressHandler={rightBtnHandler}>{rightBtnName}</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
});

export default ButtonGroup;
