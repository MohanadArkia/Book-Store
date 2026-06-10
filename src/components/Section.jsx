import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import TextF from "./TextF";
import Book from "./Book";

const Section = (props) => {

  return (
    <View style={styles.container}>
      <View style={styles.sectionContainer}>
        <TextF style={styles.title} text={"For you"} />
        <TouchableOpacity>
          <TextF text={"View All"} style={styles.viewAll} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true} style={styles.hScrollView}>
        <Book image={"https://res.cloudinary.com/dmhpoq637/image/upload/v1781083404/assembly_book_x5jbgu.webp"} /> 
      </ScrollView>
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  sectionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 25,
  },

  viewAll: {
    borderBottomWidth: 1,
    borderColor: "#FFEEC1",
  },

  hScrollView: {
    
  }
});
