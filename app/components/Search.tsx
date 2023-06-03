import React, { useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";

interface SearchProps {
  onPress?: () => void;
  setQuery: (text: string) => void;
  query: string;
}

export default function Search(props: SearchProps) {

  return (
    <Pressable style={styles.searchModal}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        onFocus={props.onPress}
        onChangeText={(text) => {
          props.setQuery(text);
        }}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  searchModal: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },
  searchInput: {
    width: "90%",
    backgroundColor: "#EFEDED",
    color: "black",
    borderRadius: 8,
    padding: 10,
  },
});
