import React, { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";

interface SearchProps {
  onPress?: () => void;
  setQuery: (text: string) => void;
  query: string;
  setShowFilters: Dispatch<SetStateAction<boolean>>;
  showFilters?: boolean;
}

export default function Search(props: SearchProps) {

  const handleFocus = () => {
    if(!props.showFilters)
      props.setShowFilters(true);
  }

  return (
    <Pressable style={styles.searchModal}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        onFocus={handleFocus}
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
