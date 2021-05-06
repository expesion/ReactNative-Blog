import React, { useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import BlogContext from "../context/BlogContex";
import { Feather } from "@expo/vector-icons";
function IndexScreen({ navigation }) {
  const { state: blogPost, addBlogPost, deletePost } = useContext(BlogContext);
  const addPost = () => {
    navigation.navigate("Create");
  };
  return (
    <View>
      <Button onPress={addPost} mode="contained" color="orange">
        Feeling Lucky?
      </Button>
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
