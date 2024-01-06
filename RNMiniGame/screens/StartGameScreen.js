import { View, TextInput, Pressable, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "#27030f",
    /* IOS Styling  */
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#dbb741",
    borderBottomWidth: 2,
    color: "#dbb741",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default StartGameScreen;
