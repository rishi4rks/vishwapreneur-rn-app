import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  WebView,
  StatusBar,
} from 'react-native';
import { Header, Container } from 'native-base';
import { Constants, Font } from 'expo';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class edcviit extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <Container style={{ paddingTop: Constants.statusBarHeight }}>
        <WebView
          style={styles.webview}
          source={{ uri: 'https://www.edcviit.com/' }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={false}
          scalesPageToFit={true} />
      </Container>
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

