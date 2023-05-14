import React from "react";
import { StyleSheet, View, Text, Image, ImageSourcePropType } from "react-native";

interface IconWithTextProps {
  source: ImageSourcePropType;
  text: string;
  size: "small" | "medium";
}

export default function IconWithText(props: IconWithTextProps) {
  return (
    <View>
      <Image
        style={styles[props.size]}
        source={props.source}
      />
      <Text style={{ textAlign: "center" }}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    paddingLeft: 15,
    paddingRight: 50,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  medium: {
    width: 30,
    height: 30,
  },
  small: {
    width: 15,
    height: 15,
  },
});
