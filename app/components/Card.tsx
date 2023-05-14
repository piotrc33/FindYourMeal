import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { lightBlack, subtleGray } from "../../constants/Colors";
import IconWithText from "./shared/IconWithText";

interface CardProps {
  onPress: () => void
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={props.onPress}>
      <View style={styles.cardImage}>
        <Image
          style={styles.cardImage}
          source={require("../../assets/smalec.jpeg")}
        />
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>Smalec Domowy</Text>

        <View style={[styles.flex, styles.flexRow]}>
          <IconWithText
            size="small"
            source={require("../../assets/clock.png")}
            text={"50"}
          />
          <IconWithText
            size="small"
            source={require("../../assets/serving-dish.png")}
            text={"50"}
          />
          <IconWithText
            size="small"
            source={require("../../assets/health.png")}
            text={"50"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    height: 120,
    display: "flex",
    overflow: "hidden",
    flexDirection: "row",

    border: "1px solid red",
    borderColor: lightBlack,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,

    marginBottom: "auto",
  },
  cardImage: {
    maxHeight: "100%",
    maxWidth: 140,
    width: "100%",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    width: "100%",
    textAlign: "center",
    minHeight: 70
  },
  cardInfo: {
    display: "flex",
    flex: 1,
    alignItems: "center"
  },
  flex: {
    width: "80%",
    display: "flex",
    justifyContent: "space-around"
  },
  flexRow: {
    flexDirection: "row"
  }
});
