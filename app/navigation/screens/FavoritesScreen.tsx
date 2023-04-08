import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function FavoritesScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Favorite Screen</Text>

      <Button
        title="go to note"
        onPress={() => props.navigation.push("Note")}
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
