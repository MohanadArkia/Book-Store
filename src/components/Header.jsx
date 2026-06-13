import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import TextF from "./TextF";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <FontAwesome
            style={styles.bookMarkIcon}
            name="bookmark"
            size={40}
            color="black"
          />
        </View>

        <View>
          <TextF style={styles.txtName} text={"Mohanad"} />
          <TextF style={styles.txtTitle} text={"Book Store"} />
        </View>
      </View>

      <TouchableOpacity>
        <FontAwesome6
          name="cart-shopping"
          size={30}
          color="#0B8C7C"
          style={styles.cartIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 60,
    height: 60,
    backgroundColor: "#FFEEC1",
    alignItems: "flex-end",
    justifyContent: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },

  bookMarkIcon: {
    marginRight: 5,
  },

  txtName: {
    fontSize: 30,
  },

  txtTitle: {
    fontSize: 17,
    letterSpacing: 3,
  },

  cartIcon: {
    marginRight: 10,
  },
});
