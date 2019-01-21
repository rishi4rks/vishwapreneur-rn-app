import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  WebView,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { Header, Container } from 'native-base';
import { Constants, Font } from 'expo';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default class edcviit extends Component {
  static navigationOptions = { header: null };
  state = {
    fontLoaded: false,
  };
  static navigationOptions = { header: null };
  async componentDidMount() {
    await Font.loadAsync({
      'Batmanforever': require('../../fonts/batmfa.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
        <Container style={{ paddingTop: Constants.statusBarHeight }}>
          <Header style={{ backgroundColor: 'white', elevation: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <StatusBar
                barStyle='light-content'
                translucent={false}
              />
              {
                this.state.fontLoaded ? (
                  <Text style={{ fontFamily: 'Batmanforever', fontSize: 35, color: 'black' }}>
                    VISHWAPRENEUR
                </Text>
                ) : null
              }
            </View>
          </Header>
          <WebView
            style={styles.webview}
            source={{ uri: 'https://www.edcviit.com/vishwapreneur/sociothon/smart-sociothon.html' }}
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