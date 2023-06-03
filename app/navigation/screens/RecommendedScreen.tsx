import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Keyboard,
  Pressable,
  FlatList,
  Button,
} from "react-native";
import { RootStackParamList } from "../../types/types";
import Search from "../../components/Search";
import Divider from "../../components/Divider";
import Card from "../../components/Card";
import { useState, useEffect } from "react";
import Filters from "../../components/Filters";
import axios from "axios";
import { apiKey, baseUrl } from "../../../constants/constants";
import { Recipe, Root } from "../../interfaces/recipeResponse.i";
import { SearchResponse } from "../../interfaces/searchResponse.i";

type RecommendedScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Recommended">;
};

export default function RecommendedScreen(props: RecommendedScreenProps) {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [recipesData, setRecipesData] = useState<Recipe[]>([]);
  const [query, setQuery] = useState<string>("");

  const queryBase = `${baseUrl}/recipes/complexSearch?apiKey=${apiKey}`;

  const changeView = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    axios
      .get<Root>(
        `${baseUrl}/recipes/random?number=5&tags=vegetarian&apiKey=${apiKey}`
      )
      .then((response) => {
        const recipes: Recipe[] = [];
        response.data.recipes.forEach((recipe) => {
          recipes.push(recipe);
        });
        setRecipesData(recipes);
      })
      .catch((error) => {});
  }, []);

  const renderItem = ({ item }: { item: Recipe }) => (
    <Card recipe={item} navigation={props.navigation} />
  );

  const handleSearch = () => {
    const idsBulk: number[] = [];
    console.log("searching endpoint", `${queryBase}&query=${query}`);
    axios
      .get<SearchResponse>(`${queryBase}&query=${query}`)
      .then((response) => {
        response.data.results.forEach((item) => {
          idsBulk.push(item.id);
        });
        const idsString: string = idsBulk.join(",");
        axios
          .get<Recipe[]>(
            `${baseUrl}/recipes/informationBulk?ids=${idsString}&apiKey=${apiKey}`
          )
          .then((response) => {
            props.navigation.navigate("SearchResult", {resultsRecipes: response.data});
          });
      })
      .catch((error) => {});
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Search onPress={changeView} query={query} setQuery={setQuery} />

      {showFilters ? (
        <>
          <Filters onSearch={changeView} />
          <View style={styles.searchButton}>
            <Button title="SEARCH" onPress={handleSearch} />
          </View>
        </>
      ) : (
        <View style={styles.flatListContainer}>
          <Divider text="Recommended" />

          <FlatList
            data={recipesData}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              backgroundColor: "white",
              paddingBottom: 15,
            }}
          />

          <StatusBar style="auto" />
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  flatListContainer: {
    width: "100%",
    flex: 1,
  },
  searchButton: {
    width: "80%",
    alignSelf: "center",
    marginTop: 50,
  },
});
