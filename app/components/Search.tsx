import React from 'react'
import { StyleSheet, View, TextInput } from "react-native";


export default function Search() {
  return (
    <View style={styles.searchModal}>
      <TextInput style={styles.searchInput} placeholder="Search" />
    </View>
  );
}

const styles = StyleSheet.create({
  searchModal: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30
  },
  searchInput: {
    width: "90%",
    backgroundColor: "#EFEDED",
    color: "black",
    borderRadius: 8,
    padding: 10,
  },
});