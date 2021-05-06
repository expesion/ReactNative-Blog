import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
function EditScreen({ route }) {
  console.log(route.params.id);
  return (
    <View>
      <Text>Edit</Text>
    </View>
  );
}

export default EditScreen;
