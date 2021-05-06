import React, { useContext, useState } from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import BlogContext from "../context/BlogContex";
function CreateScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(BlogContext);
  return (
    <View style={{ margin: 5 }}>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost({ title, content }, () => {
            navigation.navigate("Blogs");
          });
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
});
export default CreateScreen;
