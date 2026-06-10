import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

const TextF = (props) => {
  const {style, text} = props;
  
  const [fontsLoaded] = useFonts({
    ClashDisplay: require("../../assets/fonts/ClashDisplayFont/ClashDisplay-Medium.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <Text style={[styles.txt, style]}>{text}</Text>
    </View>
  );
};

export default TextF;

const styles = StyleSheet.create({
  txt: {
    fontFamily: "ClashDisplay",
    color: "#FFEEC1",
  },
});
