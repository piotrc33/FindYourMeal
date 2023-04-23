import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { lightBlack, subtleGray } from "../../constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/types";

interface CardProps {
  // navigation: StackNavigationProp<RootStackParamList, "Recommended">;
  onPress: () => void
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={props.onPress}
    >
      <View style={styles.cardImage}>
        <Image
          style={styles.cardImage}
          source={require("../../assets/smalec.jpeg")}
        />
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>Smalec Domowy</Text>

        <View style={[styles.flex, styles.flexRow]}>
          <View>
            <Image
              style={styles.smallIcon}
              source={require("../../assets/clock.png")}
            />
            <Text>50</Text>
          </View>
          <View>
            <Image
              style={styles.smallIcon}
              source={require("../../assets/serving-dish.png")}
            />
            <Text>50</Text>
          </View>
          <View>
            <Image
              style={styles.smallIcon}
              source={require("../../assets/health.png")}
            />
            <Text>50</Text>
          </View>
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
    
    // borderColor: "black",
    // borderWidth: 1,
  },
  cardInfo: {
    display: "flex",
    flex: 1,
    alignItems: "center"

    // borderColor: "salmon",
    // borderWidth: 1,
  },
  smallIcon: {
    width: 15,
    height: 15
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
