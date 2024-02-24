import React, { useEffect } from "react";
import { styles } from "@styles/global";
import { View } from "react-native";
import ImagePickerExample from "components/ImagePicker";
import { requestPermissions } from "helpers";

export default function HomeScreen() {

  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <View style={styles.container}>
      <ImagePickerExample />
    </View>
  );
}
