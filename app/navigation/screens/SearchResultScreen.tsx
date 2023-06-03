import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Keyboard,
  Pressable,
  FlatList,
  Button,
} from "react-native";
import Search from "../../components/Search";
import Divider from "../../components/Divider";
import Card from "../../components/Card";
import { Recipe } from "../../interfaces/recipeResponse.i";

export default function SearchResultScreen(props: any) {
  const results: Recipe[] = props.route.params.resultsRecipes;

  const renderItem = ({ item }: { item: Recipe }) => (
    <Card recipe={item} navigation={props.navigation} />
  );

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      {/* <Search onPress={changeView} query={query} setQuery={setQuery} /> */}

      <View style={styles.flatListContainer}>
        <Divider text="Results" />

        <FlatList
          data={results}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: "white",
            paddingBottom: 15,
          }}
        />

        <StatusBar style="auto" />
      </View>
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
