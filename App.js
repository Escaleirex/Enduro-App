import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';// Rest of the import statements
import * as Font from "expo-font";
import Apploading from "expo-app-loading";

export default function App() {

  const [fontsloaded, setFontsLoaded] = useState(false);

  const getFonts = () =>
  Font.loadAsync({
    LexendDeca: require("./assets/fonts/LexendDeca.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.logotext}>
          <Image source={require('./assets/logo.png')} style={styles.logo}/>
          <Text style={styles.text}>Login</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    marginTop: 40,
  },

  logotext:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  text: {
    flex: 1,
    color: '#000000', 
    fontSize: 35,
    fontFamily: 'LexendDeca',
    fontWeight: '700',
  },

  logo: {
    flex: 1,
    justifyContent: 'center',
    width: '75%',
    resizeMode: 'center',
  }
});


//GIT TEST