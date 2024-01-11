import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import colors from "../constants/colors";
import Title from "../components/ui/Title";

function StartGameScreen({ selectNumberHandler }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  const { width, height } = useWindowDimensions();

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

  //Dynamic Values innit
  const marginTopDistance = height < 380 ? 25 : 50;

  return (
    //just for IOS
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View>
          <View
            style={[styles.titleContainer, { marginTop: marginTopDistance }]}
          >
            <Title>Enter a Number</Title>
          </View>

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
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

//const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  titleContainer: {
    alignItems: "center",
  },
  inputContainer: {
    padding: 16,
    marginTop: 50,
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
