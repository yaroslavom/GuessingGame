import { View, Image, StyleSheet } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Wrapper from "../components/ui/Wrapper";
import SquareCard from "../components/ui/SquareCard";
import Colors from "../constants/Colors";

const GameOverScreen = ({ userNumber, roundsNumber, onStartNewGame }) => {
  return (
    <Wrapper>
      <SquareCard>
        <Title>Game Over</Title>
      </SquareCard>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require("../assets/mountain.jpg")}
          />
        </View>
        <SquareCard>
          <View style={styles.summaryText}>
            <Title small>
              Your phone needed <Title>{roundsNumber}</Title> rounds to guess
              the number <Title>{userNumber}</Title>.
            </Title>
          </View>
        </SquareCard>
        <PrimaryButton pressHandler={onStartNewGame} longButton successColor>
          Start New Game
        </PrimaryButton>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  imageWrapper: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: "hidden",
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    width: 300,
    paddingHorizontal: 15,
  }
});

export default GameOverScreen;
