import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BlogContext from "../context/BlogContex";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function RightSideEdit({ id }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
      <EvilIcons
        name="pencil"
        size={35}
        style={{ marginRight: 15 }}
        color="white"
      />
    </TouchableOpacity>
  );
}
function ShowScreen({ route }) {
  const { state: blogs } = useContext(BlogContext);
  const post = blogs.find((p) => p.id == route.params.id);
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => <RightSideEdit {...props} id={route.params.id} />,
    });
  }, [navigation]);

  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.content}</Text>
    </View>
  );
}
const styles = StyleSheet.create({});

export default ShowScreen;
