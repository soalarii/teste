import * as React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Add from "./Add.tsx";
import Lista from "./Lista.tsx";
import Lista2 from "./Lista2.tsx";
import Lista3 from "./Lista3.tsx";
import Nome from "./Nome.tsx";

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const isFocused = state.index === index;

        const clicar = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={clicar}
            style={{ flex: 1, alignItems: "center", padding: 16 }}
          >
            <Text style={{ color: isFocused ? "blue" : "gray" }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
        <Tab.Screen name="Add" component={Add} />
        <Tab.Screen name="Lista" component={Lista} />
        <Tab.Screen name="Lista2" component={Lista2} />
        <Tab.Screen name="Lista3" component={Lista3} />
        <Tab.Screen name="Nome" component={Nome} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
