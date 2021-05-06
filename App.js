import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BlogContextProvider } from "./src/context/BlogContex";
import { Feather, EvilIcons } from "@expo/vector-icons";

import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

const Stack = createStackNavigator();
function RightSideIndex() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Create")}>
      <Feather
        name="plus"
        size={30}
        style={{ marginRight: 15 }}
        color="white"
      />
    </TouchableOpacity>
  );
}
function RightSideEdit() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
      <EvilIcons
        name="pencil"
        size={35}
        style={{ marginRight: 15 }}
        color="white"
      />
    </TouchableOpacity>
  );
}
function App() {
  return (
    <PaperProvider theme={theme}>
      <BlogContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="Blogs"
              component={IndexScreen}
              options={{
                title: "Blogs",
                headerRight: (props) => <RightSideIndex {...props} />,
              }}
            />
            <Stack.Screen
              name="Show"
              component={ShowScreen}
              options={{
                title: "Selected Blog",
                headerRight: (props) => <RightSideEdit {...props} />,
              }}
            />

            <Stack.Screen name="Create" component={CreateScreen} />
            <Stack.Screen name="Edit" component={EditScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </BlogContextProvider>
    </PaperProvider>
  );
}

export default App;
