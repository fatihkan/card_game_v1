import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Results, Exit, Chat } from "./src/screens";
import {
  IconChat,
  IconExit,
  IconHeart,
  IconMenu,
  IconResults,
} from "./src/icons";
import { Screen } from "./src/constants/KeyList";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [options, setOptions] = React.useState({
    activeColor: "#000BAA",
    passiveColor: "#000BAA70",
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === Screen.Tab.Results) {
              iconName = (
                <IconResults
                  color={focused ? options.activeColor : options.passiveColor}
                />
              );
            } else if (route.name === Screen.Tab.Chat) {
              iconName = (
                <IconChat
                  color={focused ? options.activeColor : options.passiveColor}
                />
              );
            } else if (route.name === Screen.Tab.Exit) {
              iconName = (
                <IconExit
                  color={focused ? options.activeColor : options.passiveColor}
                />
              );
            }
            return iconName;
          },
          tabBarActiveTintColor: options.activeColor,
          tabBarInactiveTintColor: options.passiveColor,
          tabBarLabelStyle: {
            fontSize: 15,
          },
        })}
      >
        <Stack.Screen
          name={Screen.Tab.Results}
          component={Results}
          options={{
            headerStyle: {
              height: 100,
            },
            headerTitle: () => null,
            headerLeft: () => (
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#E11212",
                    marginRight: -5,
                  }}
                >
                  3<IconHeart />
                  {"\n"}
                  <Text style={{ fontSize: 10, color: "#2D2D2D" }}>
                    BY SOUTH
                  </Text>
                </Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity style={{ marginRight: 10 }}>
                <IconMenu />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name={Screen.Tab.Chat} component={Chat} />
        <Stack.Screen name={Screen.Tab.Exit} component={Exit} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
