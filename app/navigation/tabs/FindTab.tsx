import { createStackNavigator } from "@react-navigation/stack";
import RecipeScreen from "../screens/RecipeScreen";
import RecommendedScreen from "../screens/RecommendedScreen";
import SearchResultScreen from "../screens/SearchResultScreen";

const Stack = createStackNavigator();

export default function FindTab() {
  return (
    <Stack.Navigator initialRouteName="Recommended" screenOptions={{headerShown: false}} >
      <Stack.Screen name="Recommended" component={RecommendedScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
      <Stack.Screen name="SearchResult" component={SearchResultScreen} />
    </Stack.Navigator>
  );
}