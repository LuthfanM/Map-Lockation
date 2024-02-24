import React from "react";
import { styles } from "@styles/global";
import { View } from "react-native";

const Footer = ({ children }: { children: React.JSX.Element }) => {
  return <View style={styles.footer}>{children}</View>;
};

export default Footer;
