import { View, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";
import colors from "../constants/colors";

function StartGameScreen({ selectNumberHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const handleNumberInput = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetNumberInput = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const toInt = parseInt(enteredNumber);
    if (isNaN(toInt) || toInt < 0 || toInt > 99) {
      return Alert.alert("Error", "Has to be an umber between 1-99", [
        {
          text: "Okay",
          style: "destructive",
          onPress: resetNumberInput,
        },
      ]);
    }

    selectNumberHandler(toInt);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={handleNumberInput}
        value={enteredNumber}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonView}>
          <PrimaryButton onPress={resetNumberInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonView}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
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
    backgroundColor: colors.primaryBG,
    /* IOS Styling  */
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: colors.secondary500,
    borderBottomWidth: 2,
    color: colors.secondary500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonView: {
    flex: 1,
  },
});

export default StartGameScreen;
