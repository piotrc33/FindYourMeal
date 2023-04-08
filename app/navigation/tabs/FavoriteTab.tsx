import { createStackNavigator } from "@react-navigation/stack";
import FavoritesScreen from "../screens/FavoritesScreen";
import NoteScreen from "../screens/NoteScreen";
import RecipeScreen from "../screens/RecipeScreen";

const Stack = createStackNavigator();

export default function FavoriteTab() {
  return (
    <Stack.Navigator initialRouteName="List" screenOptions={{headerShown: false}} >
      <Stack.Screen name="List" component={FavoritesScreen} />
      <Stack.Screen name="Note" component={NoteScreen} />
      <Stack.Screen name="Recipe" component={RecipeScreen} />
    </Stack.Navigator>
  );
}