import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  Text,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import background from "./assets/images/background.png";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useCallback, useState } from "react";
import colors from "./constants/colors";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  /* State */
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(false);
  const [gameRounds, setGameRounds] = useState(1);
  const [fontsLoaded] = useFonts({
    openSansBold: require("./assets/fonts/OpenSans-Bold.ttf"),
    openSansRegular: require("./assets/fonts/OpenSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  const selectNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const roundHandler = () => {
    setGameRounds(gameRounds + 1);
  };

  const gameOverHandler = () => {
    setGameOver(true);
  };

  const resetGame = () => {
    setGameOver(false);
    setUserNumber();
  };

  return (
    <View style={styles.appContainer} onLayout={onLayoutRootView}>
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
          <SafeAreaView style={styles.safeAreaViewStyle}>
            {!userNumber && (
              <StartGameScreen selectNumberHandler={selectNumberHandler} />
            )}
            {userNumber && !gameOver && (
              <GameScreen
                userNumber={userNumber}
                onGameOver={gameOverHandler}
                onNewRound={roundHandler}
              />
            )}
            {gameOver && userNumber && (
              <GameOverScreen onReset={resetGame} gameRounds={gameRounds} />
            )}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </View>
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
  safeAreaViewStyle: {
    flex: 1,
    marginTop: 20,
  },
});
