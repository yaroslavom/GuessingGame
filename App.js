import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import Colors from "./constants/Colors";

export default function App() {
  const [userNumber, setUserNumber] = useState("");

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.secondary]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/dices.jpeg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
