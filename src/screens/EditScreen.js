import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BlogContext from "../context/BlogContex";
function EditScreen({ route }) {
  const navigation = useNavigation();
  const { state: Blogs, editPost } = useContext(BlogContext);

  const [info, setInfo] = useState(() => {
    const blog = Blogs.find((item) => item.id == route.params.id);
    return blog;
  });
  return (
    <View>
      <Text style={styles.label}>Enter New Title:</Text>
      <TextInput
        style={styles.input}
        value={info.title}
        onChangeText={(newValue) =>
          setInfo((prevValue) => ({
            title: newValue,
            content: prevValue.content,
          }))
        }
      />
      <Text style={styles.label}>Enter New Content:</Text>
      <TextInput
        style={styles.input}
        value={info.content}
        onChangeText={(newValue) =>
          setInfo((prevValue) => ({
            title: prevValue.title,
            content: newValue,
          }))
        }
      />
      <Button
        title="Save"
        onPress={() => {
          editPost(
            {
              title: info.title,
              content: info.content,
              id: Blogs.findIndex((item) => item.id == route.params.id),
            },
            () => {
              navigation.navigate("Blogs");
            }
          );
        }}
      />
      <Text>
        {info.title}
        {info.content}
      </Text>
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
export default EditScreen;
