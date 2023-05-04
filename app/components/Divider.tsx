import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { lightBlack, subtleGray } from "../../constants/Colors";

interface DividerProps {
  text: string
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  return (
    <View style={styles.divider}>
      <Text style={styles.dividerText}>{text}</Text>
    </View>
  );
}

export default Divider;

const styles = StyleSheet.create({
  divider: {
    alignSelf: "stretch",
    borderBottomColor: lightBlack,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
    paddingBottom: 5,
  },
  dividerText: {
    marginLeft: 15,
    color: lightBlack
  },
});

