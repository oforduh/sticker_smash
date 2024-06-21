import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ImageViewer from "./component/imageViewer";
import ButtonComponent from "./component/button";
import * as ImagePicker from "expo-image-picker";
import React, { useState, useEffect } from "react";
import PlaceholderImage from "./assets/images/background-image.png";
import CircleButton from "./component/circleButton";
import IconButton from "./component/iconButton";
import EmojiPicker from "./component/emojiPicker";
import EmojiSticker from "./component/emojiSticker";
import EmojiList from "./component/emojiList";

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pickedEmoji, setPickedEmoji] = useState(null);

  console.log(pickedEmoji);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  // this function close the option button
  const onReset = () => {
    setShowAppOptions(false);
  };

  // this function opens the emoji stickers  modal
  const onAddSticker = () => {
    setIsModalVisible(true);
    // we will implement this later
  };

  // this function closes the emoji stickers  modal
  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          PlaceholderImage={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>

      {/* toggle between options container and choose image button selectors */}
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon={"refresh"} label={"reset"} onPress={onReset} />
            <CircleButton onPress={onAddSticker} />
            <IconButton
              icon={"save-alt"}
              label={"save"}
              onPress={onSaveImageAsync}
            />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <ButtonComponent
            label={`Choose a photo`}
            theme={"primary"}
            onPress={handlePickImage}
          />
          <ButtonComponent
            label={`use this photo`}
            onPress={() => {
              setShowAppOptions(true);
            }}
          />
        </View>
      )}

      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>

      <StatusBar style="inverted" />
    </View>
  );
}

const borderObj = {
  borderColor: "red",
  borderWidth: 2,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    // justifyContent: "center",
    // ...borderObj,
  },
  imageContainer: {
    // ...borderObj,
    flex: 1,
    position: "relative",
    paddingTop: 58,
    width: "100%",
    alignItems: "center",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
    // justifyContent: "center",
    // ...borderObj,
  },

  // option styling starts here
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 70,
  },
});
