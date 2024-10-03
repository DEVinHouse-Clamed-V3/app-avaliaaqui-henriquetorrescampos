import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Feedback from "./pages/Feedback";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>

        <Stack.Screen name="Products" component={Products}></Stack.Screen>

        <Stack.Screen name="Feedback" component={Feedback}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
