import { View, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import ShadowWrapper from "../ui/ShadowWrapper";
import Title from "../ui/Title";

const GuessLoginItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.container}>
      <ShadowWrapper slight>
        <View style={styles.listItem}>
          <Title>#{roundNumber}</Title>
          <Title>Opponents guess: {guess}</Title>
        </View>
      </ShadowWrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  listItem: {
    borderColor: Colors.secondary,
    borderWidth: 1,
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default GuessLoginItem;
