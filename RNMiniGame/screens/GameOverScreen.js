import { View, Text, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({ onReset, gameRounds }) {
  return (
    <View style={styles.gameOverScreenContainer}>
      <View style={styles.headerContainer}>
        <Title>Game Over!</Title>
        <Text style={styles.headerText}>You Lost! </Text>
        <Text style={styles.headerText}>
          It took {gameRounds} rounds to beat you!{" "}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={onReset}>Yes</PrimaryButton>
        <PrimaryButton>No</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameOverScreenContainer: {
    flex: 1,
    padding: 24,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 60,
  },

  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 40,
    color: colors.primary500,
  },
});
