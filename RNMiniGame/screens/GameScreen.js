import { View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";
import colors from "../constants/colors";

export default function GameScreen() {
  return (
    <View style={styles.gameScreenContainer}>
      <Title>Opponents Guess</Title>
      {/* ToDo- Add individuals cards for each guess */}
      <View>
        <Text>higher or Lower?</Text>
        {/* ToDo - Add Buttons - Secondary */}
      </View>
      <View>
        <Text> Log Rounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
    padding: 24,
  },
});
