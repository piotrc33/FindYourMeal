import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

// Tabs
import FavoriteTab from "../navigation/tabs/FavoriteTab";
import FindTab from "../navigation/tabs/FindTab";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { accentColor } from "../../constants/Colors";

const findName: string = "Find";
const favoriteName = "Favorite";
const Tab = createBottomTabNavigator();

export default function ScreensContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={findName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: "search" | "heart";
            const routeName = route.name;

            if (routeName === findName) {
              iconName = "search";
            } else if (routeName === favoriteName) {
              iconName = "heart";
            } else iconName = "search";

            return (
              <FontAwesome
                name={iconName}
                size={size}
                style={{ color: color }}
              />
            );
          },
          tabBarActiveTintColor: accentColor,
          tabBarStyle: { paddingBottom: 10, paddingTop: 10, height: 60 },
        })}
      >
        <Tab.Screen
          name={findName}
          component={FindTab}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={favoriteName}
          component={FavoriteTab}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
