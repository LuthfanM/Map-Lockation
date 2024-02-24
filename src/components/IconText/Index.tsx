import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';
import { colors } from "constants/colors";

const IconText = () => {
  return (
    <View style={styles.container}>
      <Feather name="x-octagon" size={30} color="#000" />      
      <Text style={styles.text}>No Available Data</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "40%", 
    backgroundColor: colors.primary_color_mono1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 20,
    overflow: "hidden",
  },
  text: {
    marginTop: 10, // Add some space between the icon and text
    color: "#000", // Text color
    fontSize: 16, // Text size
  },
});

export default IconText;
