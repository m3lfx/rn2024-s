import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


import ProductContainer from './Screens/Product/ProductContainer';
import Header from './Shared/Header';
import { NativeBaseProvider, extendTheme, } from "native-base";
import { NavigationContainer } from '@react-navigation/native'
import Main from './Navigators/Main'

const theme = extendTheme({ colors: newColorTheme });
const newColorTheme = {
  brand: {
    900: "#8287af",
    800: "#7c83db",
    700: "#b3bef6",
  },
};
export default function App() {
  return (

    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <View style={styles.container}>
          <Header />
          <ProductContainer />
          <Main />

        </View>
      </NavigationContainer>


    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
