// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import RecipeScreen from "../screens/RecipeScreen";
import SearchScreen from "../screens/SearchScreen";
import RecommendedScreen from "../screens/RecommendedScreen";

const Stack = createStackNavigator();

export default function FindTab() {
  return (
    <Stack.Navigator initialRouteName="Recommended" screenOptions={{headerShown: false}} >
      <Stack.Screen name="Recommended" component={RecommendedScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
    </Stack.Navigator>
  );
}