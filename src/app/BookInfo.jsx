import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";

const BookInfo = () => {
  const params = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.bookImageContainer}>
        <Image source={{ uri: params.image }} style={styles.image} />
      </View>
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{params.title}</Text>
        <Text style={styles.author}>{params.author}</Text>
      </View>
    </SafeAreaView>
  );
};

export default BookInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04332D",
  },
  bookImageContainer: {
    backgroundColor: "#04332D",
    justifyContent: "center",
    alignItems: "center",
  },

  bookInfo: {
    marginLeft: 10,
  },

  image: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    color: "#FFEEC1",
  },

  author: {
    color: "#0B8C7C",
  },
});
