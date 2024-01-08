import { View, Text, StyleSheet } from "react-native";
import colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: colors.primary500,
    color: colors.primaryContrast,
    padding: 24,
    borderRadius: 8,
    backgroundColor: colors.secondary500,
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.buttonPrimary,
    textAlign: "center",
  },
});
