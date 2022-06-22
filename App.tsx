/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
// import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from "react-native"
// import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions } from "react-native/Libraries/NewAppScreen"

import "react-native-reanimated"
import "react-native-gesture-handler"
import React from "react"
import Main from "./components/Main"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Expenses from "./screens/secondary_screens/Expenses"
import Incomes from "./screens/secondary_screens/Incomes"


const App = () => {

  const { Navigator, Screen } = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Main">
        <Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Screen name="Incomes" component={Incomes} options={{ title: "Nouveau revenu", headerTitleAlign: "center" }} />
        <Screen name="Expenses" component={Expenses} options={{ title: "Nouvelle dépense", headerTitleAlign: "center" }} />
      </Navigator>
    </NavigationContainer>
  )
}

export default App