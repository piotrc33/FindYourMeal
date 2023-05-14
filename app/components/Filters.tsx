import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import FilterButton from "./FilterButton";
import { StatusBar } from "expo-status-bar";
import Divider from "./shared/Divider";

interface FiltersProps {
  onSearch: () => void;
}

export default function Filters(props: FiltersProps) {
  return (
    <View style={styles.container}>
      <Divider text="Diet" />
      <View style={styles.buttonsContainer}>
        <FilterButton text="Ketogenic" />
        <FilterButton text="Ketogenic" />
        <FilterButton text="Ketogenic" />
      </View>

      <Divider text="Type" />
      <View style={styles.buttonsContainer}>
        <FilterButton text="Breakfast" />
        <FilterButton text="Lunch" />
        <FilterButton text="Dinner" />
      </View>

      <View style={styles.searchButton}>
        <Button title="SEARCH" onPress={props.onSearch} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: '100%',
  },
  buttonsContainer: {
    marginHorizontal: 10,
    flexDirection: "row",
    marginBottom: 10
  },
  searchButton: {
    width: "80%",
    alignSelf: 'center',
    marginTop: 100
  },
});
