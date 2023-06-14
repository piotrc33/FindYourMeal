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
import { accentColor } from "../../../constants/Colors";

type RecommendedScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Recommended">;
};

export default function RecommendedScreen(props: RecommendedScreenProps) {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [recipesData, setRecipesData] = useState<Recipe[]>([]);
  const [query, setQuery] = useState<string>("");
  const [filterQuery, setFilterQuery] = useState<string>("");

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

  useEffect(() => {
    console.log(filterQuery);
  }, [filterQuery]);  

  const renderItem = ({ item }: { item: Recipe }) => (
    <Card recipe={item} navigation={props.navigation} />
  );

  const handleSearch = () => {
    const idsBulk: number[] = [];
    console.log("searching endpoint", `${queryBase}&query=${query}${filterQuery}`);
    axios
      .get<SearchResponse>(`${queryBase}&query=${query}${filterQuery}`)
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
            props.navigation.navigate("SearchResult", {
              resultsRecipes: response.data,
            });
          });
      })
      .catch((error) => {});
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Search showFilters={showFilters} setShowFilters={setShowFilters} onPress={changeView} query={query} setQuery={setQuery} />

      {showFilters ? (
        <>
          <Filters setFilters={setFilterQuery}/>
          <View style={styles.searchButton}>
            <Button title="SEARCH" color={accentColor} onPress={handleSearch} />
          </View>
          <View style={styles.backButton}>
            <Button title="BACK" color={accentColor} onPress={() => setShowFilters(false)} />
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
  backButton: {
    width: "80%",
    marginTop: 20,
  },
});
