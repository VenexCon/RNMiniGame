import { View, Pressable, Text, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("pressed");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        android_ripple={{ color: "#630735" }}
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
  },
  buttonInnerContainer: {
    backgroundColor: "#bd0c65",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
export default PrimaryButton;
