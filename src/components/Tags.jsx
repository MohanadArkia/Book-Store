import { View, StyleSheet, Text } from "react-native";

const Tags = (props) => {
  const { tags } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.tagsTxt}>{tags}</Text>
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    width: 100,
    borderRadius: 20,
    padding: 5,
    backgroundColor: "#665230",
  },

  tagsTxt: {
    color: "#FFEEC1",
  },
});
