/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './src/screens/Home';
import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonIdScreen from './src/screens/PokemonId';
import ScanScreen from './src/screens/Scan';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const RootStack = createNativeStackNavigator({
    screens: {
      Home: {
        screen: HomeScreen,
      },
      Scan: {
        screen: ScanScreen,
      },
      PokemonId: {
        screen: PokemonIdScreen,
      },
    },
    screenOptions: { headerShown: false },
  });

  const Navigation = createStaticNavigation(RootStack);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigation />
    </SafeAreaProvider>
  );
}

export default App;
