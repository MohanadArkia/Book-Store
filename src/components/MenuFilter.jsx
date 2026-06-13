import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

const MenuFilter = () => {
  // Refactor selection logic
  const [bestSeller, setBestSeller] = useState(true);
  const [latest, setLatest] = useState(false);
  const [comingSoon, setComingSoon] = useState(false);

  const onSelectBestSeller = () => {
    setBestSeller(true);
    setLatest(false);
    setComingSoon(false);
  };

  const onSelectLatest = () => {
    setLatest(true);
    setBestSeller(false);
    setComingSoon(false);
  };

  const onSelectComingSoon = () => {
    setComingSoon(true);
    setBestSeller(false);
    setLatest(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSelectBestSeller}>
        <Text style={bestSeller ? styles.menuPressed : styles.menuTxt}>
          Best Sellers
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onSelectLatest}>
        <Text style={latest ? styles.menuPressed : styles.menuTxt}>Latest</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onSelectComingSoon}>
        <Text style={comingSoon ? styles.menuPressed : styles.menuTxt}>
          Coming Soon
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },

  menuTxt: {
    color: "#0B8C7C",
  },

  menuPressed: {
    color: "#FFEEC1",
  },
});
