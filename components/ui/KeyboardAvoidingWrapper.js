import { StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";

const KeyboardAvoidingWrapper = ({ children }) => {
  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView style={styles.container} behavior='position'>
        {children}
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardAvoidingWrapper;
