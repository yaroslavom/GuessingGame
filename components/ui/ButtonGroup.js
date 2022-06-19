import { View, StyleSheet } from "react-native";
import PrimaryButton from "./PrimaryButton";

const ButtonGroup = ({
  children,
  leftBtnName,
  rightBtnName,
  leftBtnHandler,
  rightBtnHandler,
  textLarge,
}) => {
  return (
    <View style={styles.buttonGroup}>
      <View style={styles.button}>
        <PrimaryButton
          textLarge={textLarge}
          successColor
          pressHandler={leftBtnHandler}
        >
          {leftBtnName}
        </PrimaryButton>
      </View>
      {children && <View style={styles.children}>{children}</View>}
      <View style={styles.button}>
        <PrimaryButton textLarge={textLarge} pressHandler={rightBtnHandler}>
          {rightBtnName}
        </PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  children: {
    flex: 2,
  },
});

export default ButtonGroup;
