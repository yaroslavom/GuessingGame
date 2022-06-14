import { View, StyleSheet } from "react-native";

const Wrapper = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
});

export default Wrapper;
