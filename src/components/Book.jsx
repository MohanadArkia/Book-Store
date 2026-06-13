import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const Book = (props) => {
  const { title, image, author, price } = props;
  const nav = useRouter();

  const goToBookInfo = () => {
    nav.push({ pathname: "/BookInfo", params: props });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToBookInfo}>
      <View style={styles.bookContainer}>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.bookInfoContainer}>
          <View>
            <Text style={styles.titleAndPrice}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
          {price && <Text style={styles.titleAndPrice}>{price} INS</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "60%",
  },

  image: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },

  bookContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  bookInfoContainer: {
    justifyContent: "space-between",
  },

  titleAndPrice: {
    color: "#FFEEC1",
    fontSize: 18,
  },

  author: {
    color: "#0B8C7C",
  },

  tagContainer: {
    flexDirection: "row",
  },
});
