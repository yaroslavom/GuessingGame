import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 100,
    marginHorizontal: 25,
    borderRadius: 10,
    backgroundColor: "#72063c",
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
    color: "#db3",
    marginVertical: 10,
    borderBottomColor: "#db3",
    borderBottomWidth: 2,
  },
});

export default StartGameScreen;
