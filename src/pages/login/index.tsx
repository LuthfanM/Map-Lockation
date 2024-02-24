import React, { useState } from "react";
import { styles } from "@styles/global";
import {  
  Text,
  View,
  TextInput,
  Pressable,
  ToastAndroid,
} from "react-native";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    ToastAndroid.show('Successfully Login', ToastAndroid.SHORT);
    navigation.navigate("Home");
  };

  return (
    <View style={[styles.container, styles.centering]}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.text}>Login</Text>
      </Pressable>      
    </View>
  );
}
