import React, { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { accentColor, subtleGray } from "../../constants/Colors";
import { lightBlack } from "../../constants/Colors";
import { Diet } from "../types/types";

interface FilterButtonProps {
  text?: string;
  diets?: Diet[] ;
  value?: Diet;
  setter?: Dispatch<SetStateAction<Diet[]>>; 
}

export default function FilterButton(props: FilterButtonProps) {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const setActive = () => {
    setIsFilterActive(!isFilterActive);
  }
  
  const handlePress = () => {
    setActive();
    if(props.setter && props.value !== undefined){
      if(!props.diets?.includes(props.value)) {
        props.setter([...(props.diets ?? []), props.value]);
      } 
      else {
        props.setter(props.diets.filter((item) => item !== props.value));
      }
    }
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.filterButton, isFilterActive && styles.active]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  filterButton: {
    backgroundColor: subtleGray,
    color: lightBlack,

    flexWrap: 'wrap',
    alignSelf: 'flex-start',

    borderRadius: 14,
    fontWeight: 500,

    paddingVertical: 5,
    paddingHorizontal: 9,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  active: {
    backgroundColor: accentColor,
    color: 'white'
  }
});
