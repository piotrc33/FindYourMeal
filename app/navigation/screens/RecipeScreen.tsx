import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Divider from "../../components/Divider";
import RecipeTableRow from "../../components/RecipeTableRow";
import { ScrollView } from "react-native-gesture-handler";
import IconWithText from "../../components/shared/IconWithText";
import { Recipe, Root } from "../../interfaces/recipeResponse.i";
import { removeHtmlTags } from "../../utils/utilities";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiKey, baseUrl } from "../../../constants/constants";

export default function RecipeScreen(props: any) {
  const heartIcon = require("../../../assets/favourite.png");
  const recipe: Recipe = props.route.params.recipe;
  // let recipeWNutrition: Recipe;

  const [recipeWNutrition, setRecipeWNutrition] = useState<Recipe>();

  useEffect(() => {
    axios
      .get<Recipe>(
        `${baseUrl}/recipes/${recipe.id}/information?includeNutrition=true&apiKey=${apiKey}`
      )
      .then((response) => {
        // const recipes: Recipe[] = [];
        // response.data.recipes.forEach((recipe) => {
        //   recipes.push(recipe);
        // });
        setRecipeWNutrition(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        style={styles.recipeImage}
        source={
          recipe?.image
            ? { uri: recipe?.image }
            : require("../../../assets/smalec.jpeg")
        }
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
          style={styles.recipeTitle}
        >
          <Text style={styles.titleText}>{recipe.title}</Text>
        </LinearGradient>
        <View style={styles.heartIconContainer}>
          <Image source={heartIcon} style={styles.heartIcon} />
        </View>
      </ImageBackground>

      {/* Description */}
      <View style={styles.infoContainer}>
        <IconWithText
          source={require("../../../assets/clock.png")}
          text={recipe.cookingMinutes.toString()}
          size={"medium"}
        />
        <IconWithText
          source={require("../../../assets/serving-dish.png")}
          text={recipe.servings.toString()}
          size={"medium"}
        />
        <IconWithText
          source={require("../../../assets/health.png")}
          text={recipe.healthScore.toString()}
          size={"medium"}
        />
      </View>
      <Text style={styles.textSection}>{removeHtmlTags(recipe.summary)}</Text>

      <Divider text="Ingredients" />

      {/* <RecipeTable title="Ingredients" data={ingredientsArray} */}
      {/* <RecipeTableRow name="slonina" amount="300g" />
      <RecipeTableRow name="jablko" amount="1 pcs." /> */}

      {recipe.extendedIngredients.map((item) => (
        <RecipeTableRow
          key={item.id}
          name={item.name}
          amount={item.amount}
          unit={item.unit}
        />
      ))}

      <Divider text="Nutritional Values Per Serving" />

      {/* <RecipeTableRow name="Fat" amount="70g" />
      <RecipeTableRow name="Carbohydrates" amount="8g" /> */}
      {recipeWNutrition?.nutrition?.nutrients.map((item) => (
        <RecipeTableRow
          key={item.name}
          name={item.name}
          amount={item.amount}
          unit={item.unit}
        />
      ))}

      <Divider text="Instructions" />

      <Text style={styles.textSection}>
        {removeHtmlTags(recipe.instructions)}
      </Text>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const titleHeight: number = 50;
const heartIconSide: number = 40;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  recipeImage: {
    width: "100%",
    alignSelf: "flex-start",
    height: 300,
    position: "relative",
    zIndex: 10,
  },
  recipeTitle: {
    top: 300 - titleHeight,
    width: "100%",
    height: titleHeight,
  },
  titleText: {
    color: "white",
    fontWeight: "500",
    marginLeft: 15,
    fontSize: 20,
    width: '80%'
  },
  heartIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 60,
    padding: 10,
    width: heartIconSide + 2 * 10,
    alignSelf: "flex-end",
    marginTop: "auto",
    marginRight: 15,
    top: 20,
  },
  heartIcon: {
    width: heartIconSide,
    height: heartIconSide,
  },
  mediumIcon: {
    width: 30,
    height: 30,
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: 30,
    paddingBottom: 10,
  },
  textSection: {
    padding: 10
  },
});
