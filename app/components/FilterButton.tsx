import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { accentColor, subtleGray } from "../../constants/Colors";
import { lightBlack } from "../../constants/Colors";

interface FilterButtonProps {
  text: string;
}

export default function FilterButton(props: FilterButtonProps) {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const setActive = () => {
    setIsFilterActive(!isFilterActive);
  }

  return (
    <TouchableOpacity onPress={setActive}>
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
    marginHorizontal: 5
  },
  active: {
    backgroundColor: accentColor,
    color: 'white'
  }
});
