import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  WebView
} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class edcviit extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          style={styles.webview}
          source={{ uri: 'https://www.edcviit.com/' }}
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

