import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, PanResponder } from "react-native";
import { RootStackParamList } from "../../types/types";
import Card from "../../components/Card";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { useState } from "react";

type ScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "FavoriteList">;
};

export default function FavoritesScreen(props: ScreenProps) {
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
  ];

  const translateX = useSharedValue(0);

  const [movedIdState, setMovedIdState] = useState(0);
  let movedId = 0;

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });
  let count = 0; // for debugging

  let panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: (evt, gestureState) =>
      Math.abs(gestureState.dx) > Math.abs(gestureState.dy),
    onPanResponderMove: (evt, gestureState) => {
      if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
        // Horizontal pan detected
        if (gestureState.dx > 0) translateX.value = gestureState.dx;
        // Handle the horizontal pan
      }
    },
    onPanResponderEnd(e, gestureState) {
      translateX.value = 0;
      if (Math.abs(gestureState.dx) < 2) {
        props.navigation.navigate("Recipe", { id: 1 });
      }
    },
  });

  const renderItem = ({ item }) => (
    <Animated.View
      onTouchStart={() => {
        setMovedIdState(item.id);
        movedId = item.id;
      }}
      style={movedIdState === item.id ? rStyle : {}}
    >
      <Card recipeId={item.id} navigation={props.navigation} />
    </Animated.View>
  );

  return (
    <View {...panResponder.panHandlers} style={styles.container}>
      <View style={{width: '100%'}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ backgroundColor: "white" }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // width: "100%",
  },
});
