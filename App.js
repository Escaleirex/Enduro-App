import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={require("./assets/logo.png")} /> 

      <StatusBar style="auto" />

      <View style={styles.InputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 

      <View style={styles.InputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 

      <TouchableOpacity>
        <Text style={styles.ForgotButton}>Forgot Password?</Text> 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.LoginBtn}>
        <Text style={styles.LoginText}>LOGIN</Text> 
      </TouchableOpacity> 

      <Text style={styles.Or}>or</Text>


    </View> 
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    marginBottom: 40,
    width: 250,
    height: 250,
  },
  InputView: {
    backgroundColor: "#b6cfd9",
    borderRadius: 30,
    width: "80%",
    height: 60,
    marginBottom: 20,
  },
  TextInput: {
    height: 70,
    flex: 1,
    padding: 10,
    paddingLeft: 20,
  },
  ForgotButton: {
    height: 30,
  },
  LoginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    backgroundColor: "#438fab",
  },
  Or:{
    margin: 20,
  },
});