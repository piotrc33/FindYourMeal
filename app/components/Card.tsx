import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { lightBlack, subtleGray } from "../../constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";
import IconWithText from "./shared/IconWithText";
import { Ingredient, Recipe } from "../interfaces/recipeResponse.i";

interface CardProps {
  navigation: StackNavigationProp<RootStackParamList>;
  recipeId?: number;
  recipe?: Recipe;
  ingredients?: Ingredient[];
}

const Card: React.FC<CardProps> = ({recipe, ingredients, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("Recipe", {recipe, ingredients})}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.cardImage}
          source={recipe?.image ? {uri: recipe?.image} : require("../../assets/smalec.jpeg")}
        />
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{recipe?.title ?? 'Smalec domowy'}</Text>

        <View style={[styles.flex, styles.flexRow]}>
          <IconWithText
            source={require("../../assets/clock.png")}
            text={recipe?.cookingMinutes?.toString() ?? ''}
            size={"small"}
          />
          <IconWithText
            source={require("../../assets/serving-dish.png")}
            text={recipe?.servings.toString() ?? ''}
            size={"small"}
          />
          <IconWithText
            source={require("../../assets/health.png")}
            text={recipe?.healthScore.toString() ?? ''}
            size={"small"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    height: 120,
    display: "flex",
    overflow: "hidden",
    flexDirection: "row",

    border: "1px solid red",
    borderColor: lightBlack,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,

    marginBottom: "auto",
    margin: 15,
  },
  imageContainer: {
    flex: 1,
  },
  cardImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "cover",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    width: "100%",
    textAlign: "center",
    minHeight: 70,
  },
  cardInfo: {
    display: "flex",
    flex: 1,
    alignItems: "center",
  },
  flex: {
    width: "80%",
    display: "flex",
    justifyContent: "space-around",
  },
  flexRow: {
    flexDirection: "row",
  },
});
