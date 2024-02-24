import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { ToastAndroid } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const requestPermissions = async () => {
  const { status: cameraRollStatus } =
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (cameraRollStatus !== "granted") {
    ToastAndroid.show("Need Camera Permission", ToastAndroid.SHORT);
  }

  const { status: cameraStatus } =
    await ImagePicker.requestCameraPermissionsAsync();
  if (cameraStatus !== "granted") {
    ToastAndroid.show("Need Camera Permission", ToastAndroid.SHORT);
  }

  const { status: locationStatus } =
    await Location.requestForegroundPermissionsAsync();
  if (locationStatus !== "granted") {
    ToastAndroid.show("Need Location Permission", ToastAndroid.SHORT);
  }
};

async function LockPortraitOrientation() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_UP
  );
}

export { requestPermissions, LockPortraitOrientation };
