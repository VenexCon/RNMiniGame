import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({ onReset, gameRounds }) {
  return (
    <View style={styles.gameOverScreenContainer}>
      <View style={styles.headerContainer}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>

        <Text style={styles.headerText}>You Lost! </Text>
        <Text style={styles.headerText}>
          It took {gameRounds} rounds to beat you!{" "}
        </Text>
        <Text style={styles.headerText}>Would you like to play again?</Text>
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
    fontSize: 20,
    color: colors.primary500,
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: colors.primary500,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
