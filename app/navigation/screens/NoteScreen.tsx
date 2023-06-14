import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { FavoriteContext } from "../../utils/FavoriteContext";
import { loadNote, updateNote } from "../../utils/database";
import { accentColor } from "../../../constants/Colors";

export default function NoteScreen(props: any) {
  const { favoriteRecipeId } = useContext(FavoriteContext);
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    loadNote(favoriteRecipeId)
      .then((note) => {
        setNote(note);
      })
      .catch((err) => console.error("Error loading note:", err));;
  }, []);

  const handleSave = () => {
    updateNote(favoriteRecipeId, note);
    // props.navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Your note"
        multiline={true}
        style={styles.noteInput}
        onChangeText={setNote}
        value={note}
      />
      <View style={styles.saveButton}>
        <Button title="SAVE" color={accentColor} onPress={handleSave} />
      </View>
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
    height: "70%",
    minHeight: 300,
    textAlignVertical: "top",
    padding: 10,
    fontSize: 16,
  },
  saveButton: {
    width: "80%",
    alignSelf: "center",
    marginTop: 50,
  },
});
