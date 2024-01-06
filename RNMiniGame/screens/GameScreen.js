import {
  View,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  Text,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

export default function GameScreen() {
  return (
    <View style={styles.gameScreenContainer}>
      <Text>GameScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  gameScreenContainer: {
    flex: 1,
  },
});
