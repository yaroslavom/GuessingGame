import {
  View,
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import ButtonGroup from "../components/ui/ButtonGroup";
import Title from "../components/ui/Title";
import SquareCard from "../components/ui/SquareCard";
import Wrapper from "../components/ui/Wrapper";
import GuessLoginItem from "../components/game/GuessLoginItem";

function generateRandomNumb(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumb(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumb(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver(guessRounds.length);
    }
  }, [userNumber, currentGuess, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Hey, don't lie!", "You know that this is wrong...", [
        { text: "Exposed!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomNumb(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRound) => [newRndNumber, ...prevGuessRound]);
  };

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <View style={styles.indentBottom}>
        <NumberContainer>{currentGuess}</NumberContainer>
      <SquareCard>
        <Title small>Higher or lower?</Title>
        <ButtonGroup
          textLarge
          leftBtnName="+"
          leftBtnHandler={nextGuessHandler.bind(this, "higher")}
          rightBtnName="-"
          rightBtnHandler={nextGuessHandler.bind(this, "lower")}
        />
      </SquareCard>
    </View>
  );

  if (width > 500) {
    content = (
      <View style={styles.container}>
        <ButtonGroup
          textLarge
          leftBtnName="+"
          leftBtnHandler={nextGuessHandler.bind(this, "higher")}
          rightBtnName="-"
          rightBtnHandler={nextGuessHandler.bind(this, "lower")}
        >
          <NumberContainer>{currentGuess}</NumberContainer>
        </ButtonGroup>
      </View>
    );
  }

  return (
    <Wrapper>
      <SquareCard>
        <Title>Opponent's Guess</Title>
      </SquareCard>
      {content}
      <FlatList
        data={guessRounds}
        renderItem={({ item, index }) => (
          <GuessLoginItem
            roundNumber={guessRoundsListLength - index}
            guess={item}
          />
        )}
        keyExtractor={(item) => item}
      />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },
  indentBottom: {
    marginBottom: 15,
  },
});

export default GameScreen;
