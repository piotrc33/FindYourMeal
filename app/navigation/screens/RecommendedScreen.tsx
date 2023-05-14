import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Keyboard,
  Pressable,
} from "react-native";
import { RootStackParamList } from "../../types/types";
import Search from "../../components/Search";
import Divider from "../../components/Divider";
import Card from "../../components/Card";
import { useState } from "react";
import Filters from "../../components/Filters";

type RecommendedScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Recommended">;
};

export default function RecommendedScreen(props: RecommendedScreenProps) {
  const [showFilters, setShowFilters] = useState(false);

  const changeView = () => {
    setShowFilters(!showFilters);
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <Search onPress={changeView} />

      {showFilters ? (
        <Filters onSearch={changeView}/>
      ) : (
        <View>
          <Divider text="Recommended" />

          {/* TODO: flatlist of cards */}
          <Card onPress={() => props.navigation.push("Recipe")} />
          {/* <Divider text="Test" />
          <Button title="test" onPress={changeView}></Button> */}

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
    width: '100%'
  },
});
