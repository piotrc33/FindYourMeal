import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View } from "react-native";

export default function NoteScreen() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Your note"
        multiline={true}
        style={styles.noteInput}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  noteInput: {
    width: "100%",
    height: "100%",
    textAlignVertical: "top",
    padding: 10,
    fontSize: 16,
  },
});
