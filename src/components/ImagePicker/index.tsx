import React, { useState } from "react";
import { Image, View, Platform, ToastAndroid } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Container from "@components/Container/Container";
import Footer from "components/Footer/Footer";
import { styles } from "styles/global";
import { colors } from "constants/colors";
import Button from "components/Button/Button";
import ImageMap, { LocationProps } from "components/Map/Map";
import { DEFAULT_LOCATION } from "constants";
import * as Location from "expo-location";
import IconText from "components/IconText/Index";
import * as MediaLibrary from "expo-media-library";
// import { EXPO_PUBLIC_APP_NAME } from "react-native-dotenv";

export default function ImagePickerExample() {
  const [location, setLocation] = useState<LocationProps>(DEFAULT_LOCATION);
  const [isExif, setIsExif] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");

  const handleImagePicked = async (result) => {
    if (!result.cancelled) {
      console.log(result);
      console.log("objs", result.assets[0].exif);
      setImage(result.assets[0].uri);

      if (
        result.assets[0].exif?.GPSLatitude &&
        result.assets[0].exif?.GPSLongitude
      ) {
        const { GPSLatitude, GPSLongitude } = result.assets[0].exif;
        setIsExif(true);
        setLocation({
          latitude: GPSLatitude,
          longitude: GPSLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } else {
        setIsExif(false);
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      exif: true,
    });

    handleImagePicked(result);
  };

  const takeImage = async () => {
    if (Platform.OS === "ios") {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        ToastAndroid.show("Need Camera Permission", ToastAndroid.SHORT);
        return;
      }
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      exif: true,
    });

    if (!result.canceled) {
      console.log(result);
      console.log("objs", result.assets[0].exif);

      handleImagePicked(result);

      const currentLocation = await Location.getCurrentPositionAsync({});
      setIsExif(true);
      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    }
  };

  const deleteImage = () => {
    setIsExif(false);
    setImage("");
  };

  const saveImageToGallery = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== "granted") {
      console.error("Media library access was not granted");
      return;
    }

    try {
      const asset = await MediaLibrary.createAssetAsync(image);
      const album = await MediaLibrary.getAlbumAsync(process.env.EXPO_PUBLIC_APP_NAME);
      if (album === null) {
        await MediaLibrary.createAlbumAsync(process.env.EXPO_PUBLIC_APP_NAME, asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album.id, false);
      }
      ToastAndroid.show(
        "Image successfully saved to Gallery",
        ToastAndroid.SHORT
      );
    } catch (err) {
      console.error("Error saving image to gallery:", err);
      ToastAndroid.show("Error when saving Image", ToastAndroid.SHORT);
    }
  };

  return (
    <Container>
      <View style={{ flexGrow: 1 }}>
        <View
          style={{
            height: "40%",
            backgroundColor: colors.primary_color_mono1,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 2,
            borderColor: "#000",
            borderRadius: 20,
            overflow: "hidden",
            marginBottom: 10,
          }}
        >
          {image && (
            <Image
              source={{ uri: image }}
              style={{ flex: 1, width: "100%", resizeMode: "contain" }}
            />
          )}
          {image.length > 0 ? (
            <View style={styles.absoluteButton}>
              <Button
                onPress={saveImageToGallery}
                label="Save Image"
                textStyle={styles.text}
              />
              <Button
                onPress={deleteImage}
                label="Delete Image"
                textStyle={styles.text}
              />
            </View>
          ) : null}
        </View>
        {isExif ? (
          <View
            style={{
              height: "40%",
              backgroundColor: colors.primary_color_mono1,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: colors.black,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <ImageMap location={location} />
          </View>
        ) : (
          <IconText />
        )}
        <Footer>
          <View style={styles.buttonFooter}>
            <Button
              onPress={pickImage}
              label="Pick Image"
              style={[styles.button, { flex: 1, margin: 5 }]}
              textStyle={styles.text}
            />
            <Button
              onPress={takeImage}
              label="Take Photo"
              style={[styles.button, { flex: 1, margin: 5 }]}
              textStyle={styles.text}
            />
          </View>
        </Footer>
      </View>
    </Container>
  );
}
