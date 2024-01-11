import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import SecondaryButton from "../components/SecondaryButton";
import NumberContainer from "../components/game/NumberContainer";
import { Ionicons } from "@expo/vector-icons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver, onNewRound }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);

  const [currGuess, setCurrGuess] = useState(initialGuess);
  const [passedGuesses, setPassedGuesses] = useState([]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currGuess === userNumber) {
      minBoundary = 1;
      maxBoundary = 100;
      onGameOver();
    }
  }, [currGuess, userNumber, onGameOver]);

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
    onNewRound();
    setPassedGuesses([currGuess, ...passedGuesses]);
    const newGuess = generateRandomBetween(minBoundary, maxBoundary, currGuess);
    setCurrGuess(newGuess);
  }

  let content = (
    <>
      <View style={styles.headerContainer}>
        <Title>Opponents Guess</Title>
        <Text style={styles.opponentsNumber}>{currGuess}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <SecondaryButton onPress={nextGuessHandler.bind(this, "higher")}>
          <Ionicons name="md-add" color={"white"} size={24} />
        </SecondaryButton>
        <SecondaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color={"white"} />
        </SecondaryButton>
      </View>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.headerContainer}>
          <Title>Opponents Guess</Title>
        </View>
        <View style={{ flex: 1, alignItems: "center" }}>
          <View
            style={[
              styles.buttonContainer,
              {
                width: 350,
                alignItems: "center",
              },
            ]}
          >
            <SecondaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" color={"white"} size={24} />
            </SecondaryButton>
            <Text style={[styles.opponentsNumber, { borderWidth: 0 }]}>
              {currGuess}
            </Text>
            <SecondaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} color={"white"} />
            </SecondaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <>
      {content}
      <View style={styles.gameScreenContainer}>
        <View style={styles.roundLogContainer}>
          <Title style={styles.roundLogTitle}> Log Rounds</Title>
          <ScrollView style={styles.ScrollViewStyle}>
            {passedGuesses.map((item, index) => {
              return <NumberContainer key={index}>{item}</NumberContainer>;
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
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
    marginVertical: 10,
    padding: 10,
  },
  opponentsNumber: {
    fontSize: 36,
    textAlign: "center",
    color: colors.primary500,
    borderColor: colors.primary500,
    borderWidth: 4,
    width: "100%",
    padding: 10,
    fontFamily: "openSansRegular",
  },
  scrollViewStyles: {
    gap: 10,
  },
});
