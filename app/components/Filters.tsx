import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import FilterButton from "./FilterButton";
import { StatusBar } from "expo-status-bar";
import Divider from "./Divider";
import { Diet } from "../types/types";
import { diets, mealTypes } from "../../constants/filters";

interface FiltersProps {
  setFilters: Dispatch<SetStateAction<string>>;
}

export default function Filters(props: FiltersProps) {
  const [dietFilters, setDietFilters] = useState<Diet[]>([]);

  useEffect(() => {
    console.log(dietFilters);
    props.setFilters(buildFilterQuery());
    // sendQuery();
  }, [dietFilters]);  

  const buildFilterQuery = (): string => {
    let queryString: string = '';
    if(dietFilters) {
      queryString += `&diet=${dietFilters}`;
    }

    return queryString;
  }

  return (
    <View style={styles.container}>
      <Divider text="Diet" />
      <View style={styles.buttonsContainer}>
        {diets.map((item) => {
          return (
            <FilterButton
              key={item}
              diets={dietFilters}
              value={item}
              setter={setDietFilters}
              text={item?.toString()}
            />
          );
        })}
      </View>

      <Divider text="Type" />
      <View style={styles.buttonsContainer}>
        <FilterButton text="Breakfast" />
        <FilterButton text="Lunch" />
        <FilterButton text="Dinner" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
  },
  buttonsContainer: {
    marginHorizontal: 10,
    flexDirection: "row",
    marginBottom: 10,
    width: '100%',
    flexWrap: 'wrap'
  },
  searchButton: {
    width: "80%",
    alignSelf: "center",
    marginTop: 100,
  },
});
