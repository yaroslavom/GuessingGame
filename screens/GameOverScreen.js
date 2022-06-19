import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Wrapper from "../components/ui/Wrapper";
import SquareCard from "../components/ui/SquareCard";
import Colors from "../constants/Colors";
import ShadowWrapper from "../components/ui/ShadowWrapper";
import { ScrollView } from "react-native-web";

const GameOverScreen = ({ userNumber, roundsNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <Wrapper>
        <SquareCard>
          <Title>Game Over</Title>
        </SquareCard>
        <View style={styles.container}>
          <ShadowWrapper>
            <View style={[styles.imageWrapper, imageStyle]}>
              <Image
                style={styles.image}
                source={require("../assets/mountain.jpg")}
              />
            </View>
          </ShadowWrapper>
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
    </ScrollView>
  );
};

// const devicesWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    alignItems: "center",
  },
  imageWrapper: {
    // width: devicesWidth > 380 ? 250 : 200,
    // height: devicesWidth > 380 ? 250 : 200,
    // borderRadius: devicesWidth > 380 ? 125 : 100,
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
  },
});

export default GameOverScreen;
