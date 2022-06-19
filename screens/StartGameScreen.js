import { useState } from "react";
import { Alert, StyleSheet, TextInput } from "react-native";
import KeyboardAvoidingWrapper from "../components/ui/KeyboardAvoidingWrapper";
import Wrapper from "../components/ui/Wrapper";
import Title from "../components/ui/Title";
import ButtonGroup from "../components/ui/ButtonGroup";
import Paper from "../components/ui/Paper";
import SquareCard from "../components/ui/SquareCard";
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
    onPickNumber(chosenNumber);
  };

  return (
    <KeyboardAvoidingWrapper>
      <Wrapper>
        <SquareCard>
          <Title>Guess My Number</Title>
        </SquareCard>
        <Paper>
          <Title small>Enter a number</Title>
          <TextInput
            style={styles.input}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={changeInputHandler}
          />
          <ButtonGroup
            leftBtnName="Confirm"
            leftBtnHandler={confirmInputHandler}
            rightBtnName="Reset"
            rightBtnHandler={resetInputHandler}
          />
        </Paper>
      </Wrapper>
    </KeyboardAvoidingWrapper>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 60,
    textAlign: "center",
    fontSize: 32,
    fontFamily: "open-sans-bold",
    color: Colors.secondary,
    marginVertical: 10,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 2,
  },
});

export default StartGameScreen;
