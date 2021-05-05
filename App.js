import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BlogContextProvider } from "./src/context/BlogContex";
import IndexScreen from "./src/screens/IndexScreen";
const Stack = createStackNavigator();

function App() {
  return (
    <BlogContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Blogs" component={IndexScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogContextProvider>
  );
}

export default App;
