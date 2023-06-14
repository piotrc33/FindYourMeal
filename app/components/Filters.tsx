import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import FilterButton from "./FilterButton";
import { StatusBar } from "expo-status-bar";
import Divider from "./Divider";
import { Diet, MealType } from "../types/types";
import { diets, mealTypes } from "../../constants/filters";

interface FiltersProps {
  setFilters: Dispatch<SetStateAction<string>>;
}

export default function Filters(props: FiltersProps) {
  const [dietFilters, setDietFilters] = useState<Diet[]>([]);
  const [mealTypeFilters, setMealTypeFilters] = useState<MealType[]>([]);

  useEffect(() => {
    console.log(dietFilters);
    props.setFilters(buildFilterQuery());
  }, [dietFilters, mealTypeFilters]);  

  const buildFilterQuery = (): string => {
    let queryString: string = '';
    if(dietFilters) {
      queryString += `&diet=${dietFilters}`;
    }
    if(mealTypeFilters) {
      queryString += `&type=${mealTypeFilters}`;
    }

    return queryString;
  }

  return (
    <View style={styles.container}>
      <Divider text="Diet" />
      <View style={styles.buttonsContainer}>
        {diets.map((item) => {
          return (
            <FilterButton<Diet>
              key={item}
              state={dietFilters}
              value={item}
              setter={setDietFilters}
              text={item?.toString()}
            />
          );
        })}
      </View>

      <Divider text="Type" />
      <View style={styles.buttonsContainer}>
        {mealTypes.map((item) => {
          return (
            <FilterButton<MealType>
              key={item}
              state={mealTypeFilters}
              value={item}
              setter={setMealTypeFilters}
              text={item?.toString()}
            />
          );
        })}
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
