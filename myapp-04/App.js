// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View, ImageBackground, Keyboard, TouchableWithoutFeedback } from 'react-native';
import React from "react";

import { NavigationContainer } from '@react-navigation/native';

import { useRoute } from "./router";

const Stack = createNativeStackNavigator();

export default function App() {
  const routing = useRoute(true);

  return (
    <NavigationContainer>
      {routing}
    </NavigationContainer>
  );
}