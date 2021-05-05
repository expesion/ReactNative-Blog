import React, { useContext, useRef } from "react";
import { Text, View, StyleSheet, FlatList, TextInput } from "react-native";
import BlogContext from "../context/BlogContex";
function IndexScreen() {
  const { state: blogPost, addBlogPost } = useContext(BlogContext);
  const textRef = useRef();
  return (
    <View>
      <Text>Index Screen</Text>
      <FlatList
        data={blogPost}
        keyExtractor={(post) => post.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
      <TextInput ref={textRef} onEndEditing={addBlogPost} />
    </View>
  );
}
const styles = StyleSheet.create({});
export default IndexScreen;
