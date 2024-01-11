import { View, StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "openSansBold",
    fontSize: 24,
    color: colors.secondary500,
    textAlign: "center",
    borderBottomColor: colors.secondary500,
    borderBottomWidth: 4,
    maxWidth: "80%",
    width: 300,
  },
});
