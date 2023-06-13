import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, PanResponder } from "react-native";
import { RootStackParamList } from "../../types/types";
import Card from "../../components/Card";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useState, useEffect } from "react";
import { deleteIngredients, deleteRecipe, loadIngredients, loadRecipes } from "../../utils/database";
import { Ingredient, Recipe } from "../../interfaces/recipeResponse.i";

type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "FavoriteList">;
};

export default function FavoritesScreen(props: ScreenProps) {
  const translateX = useSharedValue(0);

  const [movedId, setMovedId] = useState(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  let panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: (evt, gestureState) =>
      Math.abs(gestureState.dx) > Math.abs(gestureState.dy),
    onPanResponderMove: (evt, gestureState) => {
      if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
        // Horizontal pan detected
        if (gestureState.dx > 0) translateX.value = gestureState.dx;
        // Handle the horizontal pan
      }
    },
    onPanResponderEnd(e, gestureState) {
      translateX.value = 0;
      if (Math.abs(gestureState.dx) < 2) {
        let clickedRecipe: Recipe | undefined = favoriteRecipes.find(
          (item) => item.id === movedId
        );
        if (clickedRecipe)
          props.navigation.navigate("Recipe", { recipe: clickedRecipe });
      }
      if (Math.abs(gestureState.dx) > 170) {
        deleteRecipe(movedId);
        deleteIngredients(movedId);
        loadDataFromDB();
      }
      console.log(`moved id: ${movedId}`)
    },
  });

  const renderItem = ({ item }: { item: Recipe }) => (
    <Animated.View
      onTouchStart={() => {
        setMovedId(item.id);
      }}
      style={movedId === item.id ? rStyle : {}}
    >
      <Card
        recipe={item}
        ingredients={ingredients}
        navigation={props.navigation}
      />
    </Animated.View>
  );

  const loadDataFromDB = () => {
    loadRecipes()
      .then((recipes) => {
        setFavoriteRecipes(recipes);
      })
      .catch((err) => console.error("Error loading recipes:", err));
    loadIngredients()
      .then((ingredients) => {
        setIngredients(ingredients);
      })
      .catch((err) => console.error("Error loading ingredients:", err));
  };

  const [favoriteRecipes, setFavoriteRecipes] = useState<Recipe[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  useEffect(() => {
    const unsubscribe = props.navigation.addListener("focus", loadDataFromDB);

    // Clean up the subscription when the component is unmounted
    return unsubscribe;
  }, []);

  return (
    <View {...panResponder.panHandlers} style={styles.container}>
      <View style={{ width: "100%" }}>
        <FlatList
          data={favoriteRecipes}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ backgroundColor: "white" }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
  },
});
