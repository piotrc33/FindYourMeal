import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Card } from "react-native-elements";
import { RootStackParamList } from "../../types/types";

type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Recommended">;
};

export default function FavoritesScreen(props: ScreenProps) {
  return (
    <View style={styles.container}>
      <Card onPress={() => props.navigation.push("Recipe")} />

      {/* <Text>Favorite Screen</Text>

      <Button
        title="go to note"
        onPress={() => props.navigation.push("Note")}
      />
      <View style={{ marginTop: 20 }}>
        <Button
          title="go to recipe"
          onPress={() => props.navigation.push("Recipe")}
        />
      </View> */}

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
