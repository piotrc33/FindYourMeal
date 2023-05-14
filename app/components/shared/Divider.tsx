import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { lightBlack } from "../../../constants/Colors";

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
    marginVertical: 10,
    paddingBottom: 5,
  },
  dividerText: {
    marginLeft: 15,
    color: lightBlack
  },
});

