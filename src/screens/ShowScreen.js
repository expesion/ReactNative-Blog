import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContex";
function ShowScreen({ route }) {
  const { state: blogs } = useContext(BlogContext);
  const post = blogs.find((p) => p.id == route.params.id);
  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  );
}
const styles = StyleSheet.create({});
export default ShowScreen;
