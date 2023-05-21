import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Divider from "../../components/Divider";
import RecipeTableRow from "../../components/RecipeTableRow";
import { ScrollView } from "react-native-gesture-handler";
import IconWithText from "../../components/shared/IconWithText";

export default function RecipeScreen() {
  const heartIcon = require("../../../assets/favourite.png");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ImageBackground
        style={styles.recipeImage}
        source={require("../../../assets/smalec.jpeg")}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "rgba(0,0,0,1)"]}
          style={styles.recipeTitle}
        >
          <Text style={styles.titleText}>Smalec Domowy</Text>
        </LinearGradient>
        <View style={styles.heartIconContainer}>
          <Image source={heartIcon} style={styles.heartIcon} />
        </View>
      </ImageBackground>

      {/* Description */}
      <View style={styles.infoContainer}>
        <IconWithText
          source={require("../../../assets/clock.png")}
          text={"50"}
          size={"medium"}
        />
        <IconWithText
          source={require("../../../assets/serving-dish.png")}
          text={"50"}
          size={"medium"}
        />
        <IconWithText
          source={require("../../../assets/health.png")}
          text={"50"}
          size={"medium"}
        />
      </View>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia inventore
        obcaecati, maiores blanditiis tempora repudiandae!
      </Text>

      <Divider text="Ingredients" />

      {/* <RecipeTable title="Ingredients" data={ingredientsArray} */}
      <RecipeTableRow name="slonina" amount="300g" />
      <RecipeTableRow name="jablko" amount="1 pcs." />

      <Divider text="Nutritional Values/100g" />

      <RecipeTableRow name="Fat" amount="70g" />
      <RecipeTableRow name="Carbohydrates" amount="8g" />

      <Divider text="Instructions" />

      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, sit.
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus omnis
        quibusdam laborum doloremque officiis iusto, recusandae maxime
        voluptatibus quam repudiandae.
      </Text>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const titleHeight: number = 50;
const heartIconSide: number = 40;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  recipeImage: {
    width: "100%",
    alignSelf: "flex-start",
    height: 300,
    position: "relative",
    zIndex: 10,
  },
  recipeTitle: {
    top: 300 - titleHeight,
    width: "100%",
    height: titleHeight,
  },
  titleText: {
    color: "white",
    fontWeight: "500",
    marginLeft: 15,
    fontSize: 20,
  },
  heartIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 60,
    padding: 10,
    width: heartIconSide + 2 * 10,
    alignSelf: "flex-end",
    marginTop: "auto",
    marginRight: 15,
    top: 20,
  },
  heartIcon: {
    width: heartIconSide,
    height: heartIconSide,
  },
  mediumIcon: {
    width: 30,
    height: 30,
  },
  infoContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    paddingTop: 30,
    paddingBottom: 10,
  },
});
