import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { RootStackParamList } from "../../types/types";
import Search from "../../components/Search";
import Divider from "../../components/Divider";
import Card from "../../components/Card";

type RecommendedScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Recommended">;
};

export default function RecommendedScreen(props: RecommendedScreenProps) {
  return (
    <View style={styles.container}>
      <Search />

      <Divider text="Recommended" />

      <Card onPress={() => props.navigation.push("Recipe")} />

      <Button
        title="go to Search"
        onPress={() => props.navigation.push("Search")}
      />
      <View style={{ marginTop: 20, marginBottom: "auto" }}>
        <Button
          title="go to recipe"
          onPress={() => props.navigation.push("Recipe")}
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
    justifyContent: "center",
    flexDirection: "column",
  },
});
