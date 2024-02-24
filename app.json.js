import 'dotenv/config';

const config = {
  expo: {
    name: process.env.EXPO_PUBLIC_APP_NAME,
    slug: process.env.EXPO_PUBLIC_APP_NAME,
    version: process.env.EXPO_PUBLIC_VERSION,    
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    plugins: [
      [
        "expo-image-picker",
        {
          photosPermission: "The app accesses your photos to let you share them with your friends."
        }
      ],
      [
        "expo-location",
        {
          locationAlwaysAndWhenInUsePermission: "Allow $(PRODUCT_NAME) to use your location."
        }
      ]
    ],
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: [
      "**/*"
    ],
    ios: {
      supportsTablet: true
    },
    android: {      
      package: "com.schenedev.image_lockation",
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY
        }
      }
    },
    web: {
      favicon: "./assets/favicon.png"
    }
  }
};

console.log(config);

export default config;
