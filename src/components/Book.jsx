import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Book = (props) => {
    const {title, image, author, price} = props;
  return (
    <View>
        <Text>{title}</Text>
        <Image source={{uri: image}} style={styles.image}/>
        <Text>{author}</Text>
        <Text>{price}</Text>
    </View>
  )
}

export default Book

const styles = StyleSheet.create({
    image: {
        width: 160,
        height: 160,
        resizeMode: "contain",
    }
})