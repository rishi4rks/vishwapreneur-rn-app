import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import { WebView } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default class App extends Component {

  render() {
    return (
<View style={{flex:1}}>
  <WebView
   style={styles.webview}
   source={{uri: 'https://www.edcviit.com/vishwapreneur/register.html'}}
   javaScriptEnabled={true}
   domStorageEnabled={true}
   startInLoadingState={false}
   scalesPageToFit={true} />
</View>
    );
  }
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    backgroundColor: '#CCCCCC',
    width: deviceWidth,
    height: deviceHeight
  }
});