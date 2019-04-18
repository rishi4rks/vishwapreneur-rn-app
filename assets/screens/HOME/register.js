import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar
} from 'react-native';
import { Header } from 'native-base';
import { Constants, Font } from 'expo';
import { WebView } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;


export default class App extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
      }}>
        <WebView
          style={styles.webview}
          source={{ uri: 'https://www.edcviit.com/vishwapreneur/register.html' }}
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