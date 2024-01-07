import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import background from "./assets/images/background.png";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";
import colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const selectNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  return (
    <>
      <StatusBar style="light"></StatusBar>
      <View style={styles.appContainer}>
        <LinearGradient
          colors={[colors.linearGradientTop, colors.linearGradientBottom]}
          locations={[0.1, 0.4]}
          style={styles.linearGradient}
        >
          <ImageBackground
            source={background}
            resizeMode="cover"
            style={styles.appContainer}
            imageStyle={styles.backgroundImage}
          >
            <SafeAreaView style={styles.appContainer}>
              {!userNumber && (
                <StartGameScreen selectNumberHandler={selectNumberHandler} />
              )}
              {userNumber && <GameScreen />}
            </SafeAreaView>
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
