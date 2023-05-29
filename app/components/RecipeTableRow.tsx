import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { accentColor } from "../../constants/Colors";

interface RecipeTableRowProps {
  name: string;
  amount: number;
  unit: string;
}

export default function RecipeTableRow(props: RecipeTableRowProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <Text style={styles.amount}>{`${props.amount} ${props.unit}`}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 50,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingVertical: 5 

  },
  name: {
    fontWeight: 'bold'
  },
  amount: {
    marginLeft: 'auto',
    color: accentColor
  }
});
