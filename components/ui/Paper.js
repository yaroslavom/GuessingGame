import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";
import ShadowWrapper from "./ShadowWrapper";

const Paper = ({ children }) => {
  return (
    <ShadowWrapper>
      <View style={styles.container}>{children}</View>
    </ShadowWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    marginTop: 30,
    marginHorizontal: 25,
    borderRadius: 10,
    backgroundColor: Colors.primary500,
  },
});

export default Paper;
