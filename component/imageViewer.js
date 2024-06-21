import { StyleSheet, View, Image } from "react-native";

export default function ImageViewer({ selectedImage, PlaceholderImage }) {
  const imageSource = selectedImage ? { uri: selectedImage } : PlaceholderImage;
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    // width: "90%",
    height: 440,
    borderRadius: 18,
  },
});
