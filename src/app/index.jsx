import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import ForYouSection from "../components/ForYouSection";
import MenuFilter from "../components/MenuFilter";
import Book from "../components/Book";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ForYouSection />
      <MenuFilter />
      <Book title={"x64 Assembly Language Step-by-Step Programming With Linux 4th Edition"} image={"https://res.cloudinary.com/dmhpoq637/image/upload/v1781083404/assembly_book_x5jbgu.webp"} author={"Jeff Duntemann"} price={200} />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#04332D",
  },
});
