import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import FavoritesScreen from "../screens/FavoritesScreen";
import NoteScreen from "../screens/NoteScreen";
import RecipeScreen from "../screens/RecipeScreen";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { FavoriteContext, FavoriteProvider } from "../../utils/FavoriteContext";
import { useContext } from "react";

const Stack = createStackNavigator();

export default function FavoriteTab() {
  const { favoriteRecipeId } = useContext(FavoriteContext);

  return (
    <FavoriteProvider>
      <Stack.Navigator
        initialRouteName="FavoriteList"
        screenOptions={({ route, navigation }): StackNavigationOptions => ({
          headerShown: true,
          headerRight:
            route.name === "Recipe"
              ? () => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Note")
                    }
                  >
                    <Image
                      style={styles.headerIcon}
                      source={require("../../../assets/notes.png")}
                    />
                  </TouchableOpacity>
                )
              : undefined,
        })}
      >
        <Stack.Screen name="FavoriteList" component={FavoritesScreen} />
        <Stack.Screen name="Note" component={NoteScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
      </Stack.Navigator>
    </FavoriteProvider>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    width: 25,
    height: 25,
  },
});
