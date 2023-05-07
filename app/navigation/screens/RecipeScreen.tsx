import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function RecipeScreen() {
  return (
    <View style={styles.container}>
      {/* Image */}
      {/* Description */}
      {/* Ingredients */}
      {/* Nutritional Values */}
      {/* Instructions */}
      <Text>Recipe Screen</Text>
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
