import React, { Dispatch, SetStateAction, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { accentColor, subtleGray } from "../../constants/Colors";
import { lightBlack } from "../../constants/Colors";

interface FilterButtonProps<T> {
  text?: string;
  state?: T[] ;
  value?: T;
  setter?: Dispatch<SetStateAction<T[]>>; 
}

export default function FilterButton<T>(props: FilterButtonProps<T>) {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const setActive = () => {
    setIsFilterActive(!isFilterActive);
  }
  
  const handlePress = () => {
    setActive();
    if(props.setter && props.value !== undefined){
      if(!props.state?.includes(props.value)) {
        props.setter([...(props.state ?? []), props.value]);
      } 
      else {
        props.setter(props.state.filter((item) => item !== props.value));
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
