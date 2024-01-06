import { StyleSheet, Text, View, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import background from "./assets/images/background.png";

export default function App() {
  return (
    <>
      <StatusBar style="light"></StatusBar>
      <View style={styles.appContainer}>
        <LinearGradient
          colors={["#aa2853", "#d7bd65"]}
          locations={[0.1, 0.4]}
          style={styles.linearGradient}
        >
          <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.appContainer}
            imageStyle={styles.backgroundImage}
          >
            <StartGameScreen />
          </ImageBackground>
        </LinearGradient>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.4,
  },
});
