import { useState } from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const changeInputHandler = (text) => {
    setEnteredNumber(text);
  };
  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(enteredNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onPickNumber(enteredNumber);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={changeInputHandler}
      />
      <View style={styles.buttonGroup}>
        <View style={styles.button}>
          <PrimaryButton successColor pressHandler={confirmInputHandler}>
            Confirm
          </PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton pressHandler={resetInputHandler}>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 15,
    marginTop: 100,
    marginHorizontal: 25,
    borderRadius: 10,
    backgroundColor: Colors.primary500,
    elevation: 4, // shadow for android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  input: {
    height: 50,
    width: 60,
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.secondary,
    marginVertical: 10,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
  },
  buttonGroup: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
});

export default StartGameScreen;
