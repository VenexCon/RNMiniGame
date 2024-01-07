import { View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";
import colors from "../constants/colors";
import SecondaryButton from "../components/SecondaryButton";

export default function GameScreen({ userNumber }) {
  /* State */
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currGuess, setCurrGuess] = useState(initialGuess);

  function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min) + min);
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponents Guess</Title>
      <Text>{initialGuess}</Text>
      <View style={styles.buttonContainer}>
        <SecondaryButton>Higher</SecondaryButton>
        <SecondaryButton>Lower</SecondaryButton>
        {/* ToDo - Add Buttons - Secondary */}
      </View>
      <View>
        <Text> Log Rounds</Text>
        {/* implement round cards here.  */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
