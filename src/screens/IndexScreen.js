import React, { useContext, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import BlogContext from "../context/BlogContex";
import { Feather } from "@expo/vector-icons";
function IndexScreen({ navigation }) {
  const { state: blogPost, addBlogPost, deletePost } = useContext(BlogContext);
  const [blog, setBlog] = useState("");
  const addPost = () => {
    addBlogPost({ title: blog, content: "" });
    setBlog("");
  };
  return (
    <View>
      <Button title="Add Post" onPress={addPost} />
      <FlatList
        data={blogPost}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Show", {
                id: item.id,
                title: "Show Blog Post",
              })
            }
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deletePost({ id: item.id })}>
                <Feather style={styles.icon} name="trash" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
      <TextInput
        value={blog}
        onChangeText={setBlog}
        onEndEditing={(e) => addBlogPost(e.nativeEvent.text)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  icon: {
    fontSize: 24,
  },
  title: {
    fontSize: 18,
  },
});
export default IndexScreen;
