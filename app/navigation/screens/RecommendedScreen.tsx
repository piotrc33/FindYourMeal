import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../types/types";

type RecommendedScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Recommended">;
};

export default function RecommendedScreen(props: RecommendedScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Recommended Screen</Text>

      <Button
        title="go to Search"
        onPress={() => props.navigation.push("Search")}
      />
      <View style={{ marginTop: 20 }}>
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
  },
});
