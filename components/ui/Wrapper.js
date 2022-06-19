import { View, StyleSheet, useWindowDimensions } from "react-native";

const Wrapper = ({ children }) => {
  const { height } = useWindowDimensions();
  const marginTopDistance = height > 480 ? 100 : 50;

  return (
    <View style={[styles.container, { marginTop: marginTopDistance }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Wrapper;
