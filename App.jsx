import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';

function App(){
  

  return (
    <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
    <WebView source={{ uri: 'https://charlenecodes.github.io/mmSarap-web/' }} style={{ flex: 1 }} />
    </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
