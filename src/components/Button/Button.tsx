import { colors } from "constants/colors";
import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

type ButtonProps = {
  onPress: () => void;
  label: string;
  style?: ViewStyle | ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
};

const Button = ({ onPress, label, style, textStyle }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? colors.primary_color : colors.primary_color_mono1,
          padding: 10,
          margin: 5,
          borderRadius: 5,
        },
        style,
      ]}
    >
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default Button;
