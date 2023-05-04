import { createStackNavigator } from "@react-navigation/stack";
import RecipeScreen from "../screens/RecipeScreen";
import RecommendedScreen from "../screens/RecommendedScreen";

const Stack = createStackNavigator();

export default function FindTab() {
  return (
    <Stack.Navigator initialRouteName="Recommended" screenOptions={{headerShown: false}} >
      <Stack.Screen name="Recommended" component={RecommendedScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
    </Stack.Navigator>
  );
}