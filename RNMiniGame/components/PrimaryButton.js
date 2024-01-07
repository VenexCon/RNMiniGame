import { View, Pressable, Text, StyleSheet } from "react-native";
import colors from "../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: colors.primaryAndroidRipple }}
        style={styles.buttonInnerContainer}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 6,
    borderRadius: 28,
    overflow: "hidden",
    minWidth: 120,
  },
  buttonInnerContainer: {
    backgroundColor: colors.buttonPrimary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: colors.primaryContrast,
    textAlign: "center",
  },
});
export default PrimaryButton;
