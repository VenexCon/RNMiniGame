import { View, StyleSheet, Text, ScrollView, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import SecondaryButton from "../components/SecondaryButton";
import NumberContainer from "../components/game/NumberContainer";

export default function GameScreen({ userNumber }) {
  let minBoundary = 1;
  let maxBoundary = 100;
  /* State */
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currGuess, setCurrGuess] = useState(initialGuess);
  //const [guessedNumbers, setGuessedNumbers] = useState([]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currGuess < userNumber) ||
      (direction === "higher" && currGuess > userNumber)
    ) {
      return alert("thats a lie isnt it?");
    }
    if (direction === "lower") {
      maxBoundary = currGuess;
    } else {
      minBoundary = currGuess + 1;
    }

    const newGuess = generateRandomBetween(minBoundary, maxBoundary, currGuess);
    setCurrGuess(newGuess);
  }

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
      <View style={styles.headerContainer}>
        <Title>Opponents Guess</Title>
        <NumberContainer style={styles.opponentsNumber}>
          {currGuess}
        </NumberContainer>
      </View>
      <View style={styles.buttonContainer}>
        <SecondaryButton onPress={nextGuessHandler.bind(this, "higher")}>
          +
        </SecondaryButton>
        <SecondaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </SecondaryButton>
      </View>
      <View style={styles.roundLogContainer}>
        <Title style={styles.roundLogTitle}> Log Rounds</Title>
        {/* <ScrollView>
          {guessedNumbers.map((item) => {
            return <NumberContainer>{item}</NumberContainer>;
          })}
        </ScrollView> */}
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
  roundLogContainer: {
    marginTop: 20,
    padding: 8,
    flex: 1,
    gap: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  opponentsNumber: {
    fontSize: 36,
    textAlign: "center",
    color: colors.primary500,
  },
});
