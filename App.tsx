import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StyleSheet } from "react-native";

import Home from "./pages/home";
import Products from "./pages/Products";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Products" component={Products}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
