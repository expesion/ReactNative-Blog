import React, { useContext, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContex";
function EditScreen({ route }) {
  const { state: Blogs } = useContext(BlogContext);

  const [info, setInfo] = useState(() => {
    const blog = Blogs.find((item) => item.id == route.params.id);
    return blog;
  });
  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
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
      <Text style={styles.label}>Enter Content:</Text>
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
