import { View, StyleSheet, Text } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <Text style={styles.title}>Opponent's Guess</Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default GameScreen;
