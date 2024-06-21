import { View, Pressable, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ButtonComponent = ({ label, theme, onPress }) => {
  if (theme === "primary") {
    return (
      <View
        style={[
          { ...styles.buttonContainer },
          {
            borderWidth: 4,
            borderColor: "#ffd33d",
            borderRadius: 18,
          },
        ]}
      >
        <Pressable
          onPress={onPress}
          style={[
            { ...styles.button },
            {
              backgroundColor: "#fff",
            },
          ]}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[{ ...styles.buttonLabel }, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;

const borderObj = {
  borderColor: "red",
  borderWidth: 2,
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    // ...borderObj,
    // backgroundColor: "#fff",
  },
  button: {
    borderRadius: 10,
    // ...borderObj,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#fff",
    // color: "red",
    fontSize: 16,
  },
});
