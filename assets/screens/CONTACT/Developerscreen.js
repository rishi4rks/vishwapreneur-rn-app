import React, { Component } from 'react';
import { Text } from 'react-native';
import { Constants, Font } from 'expo';
import { ScrollView, View, Image, TouchableOpacity, Linking, StyleSheet, StatusBar } from 'react-native';
import { Icon, Header, Container } from 'native-base';

import { SocialIcon } from 'react-native-elements';
export default class Developer extends Component {
  static navigationOptions = { header: null };
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Batmanforever': require('../../fonts/batmfa.ttf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <ScrollView>
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
          <View style={styles.container}>
            <View style={styles.incontainer}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagestyle} source={require('../../images/12345.png')} />
                <Text style={styles.title}>Aditya Jangid</Text>
                <Text style={styles.line}>EDC,VIIT</Text>
                <View style={styles.social}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                    <Icon type="Entypo" name='twitter-with-circle' style={{ fontSize: 50, color: '#55acee', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                    <Icon type="Entypo" name='facebook-with-circle' style={{ fontSize: 50, color: '#3b5998', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                    <Icon type="Entypo" name='linkedin-with-circle' style={{ fontSize: 50, color: '#0077b5', margin: 5 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.incontainer}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagestyle} source={require('../../images/12345.png')} />
                <Text style={styles.title}>Gurudas Padhar</Text>
                <Text style={styles.line}>EDC,VIIT</Text>
                <View style={styles.social}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                    <Icon type="Entypo" name='twitter-with-circle' style={{ fontSize: 50, color: '#55acee', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                    <Icon type="Entypo" name='facebook-with-circle' style={{ fontSize: 50, color: '#3b5998', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                    <Icon type="Entypo" name='linkedin-with-circle' style={{ fontSize: 50, color: '#0077b5', margin: 5 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>
          <View style={styles.container}>

            <View style={styles.incontainer}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagestyle} source={require('../../images/12345.png')} />
                <Text style={styles.title}>Aditya Jangid</Text>
                <Text style={styles.line}>EDC,VIIT</Text>
                <View style={styles.social}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                    <Icon type="Entypo" name='twitter-with-circle' style={{ fontSize: 50, color: '#55acee', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                    <Icon type="Entypo" name='facebook-with-circle' style={{ fontSize: 50, color: '#3b5998', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                    <Icon type="Entypo" name='linkedin-with-circle' style={{ fontSize: 50, color: '#0077b5', margin: 5 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.incontainer}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagestyle} source={require('../../images/12345.png')} />
                <Text style={styles.title}>Gurudas Padhar</Text>
                <Text style={styles.line}>EDC,VIIT</Text>
                <View style={styles.social}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                    <Icon type="Entypo" name='twitter-with-circle' style={{ fontSize: 50, color: '#55acee', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                    <Icon type="Entypo" name='facebook-with-circle' style={{ fontSize: 50, color: '#3b5998', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                    <Icon type="Entypo" name='linkedin-with-circle' style={{ fontSize: 50, color: '#0077b5', margin: 5 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>
          <View style={styles.container}>

            <View style={styles.incontainer}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagestyle} source={require('../../images/12345.png')} />
                <Text style={styles.title}>Aditya Jangid</Text>
                <Text style={styles.line}>EDC,VIIT</Text>
                <View style={styles.social}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                    <Icon type="Entypo" name='twitter-with-circle' style={{ fontSize: 50, color: '#55acee', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                    <Icon type="Entypo" name='facebook-with-circle' style={{ fontSize: 50, color: '#3b5998', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                    <Icon type="Entypo" name='linkedin-with-circle' style={{ fontSize: 50, color: '#0077b5', margin: 5 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.incontainer}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagestyle} source={require('../../images/12345.png')} />
                <Text style={styles.title}>Gurudas Padhar</Text>
                <Text style={styles.line}>EDC,VIIT</Text>
                <View style={styles.social}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                    <Icon type="Entypo" name='twitter-with-circle' style={{ fontSize: 50, color: '#55acee', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                    <Icon type="Entypo" name='facebook-with-circle' style={{ fontSize: 50, color: '#3b5998', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                    <Icon type="Entypo" name='linkedin-with-circle' style={{ fontSize: 50, color: '#0077b5', margin: 5 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          </View>
          <View style={styles.container}>

            <View style={styles.incontainer}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagestyle} source={require('../../images/12345.png')} />
                <Text style={styles.title}>Aditya Jangid</Text>
                <Text style={styles.line}>EDC,VIIT</Text>
                <View style={styles.social}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                    <Icon type="Entypo" name='twitter-with-circle' style={{ fontSize: 50, color: '#55acee', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                    <Icon type="Entypo" name='facebook-with-circle' style={{ fontSize: 50, color: '#3b5998', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                    <Icon type="Entypo" name='linkedin-with-circle' style={{ fontSize: 50, color: '#0077b5', margin: 5 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.incontainer}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagestyle} source={require('../../images/12345.png')} />
                <Text style={styles.title}>Gurudas Padhar</Text>
                <Text style={styles.line}>EDC,VIIT</Text>
                <View style={styles.social}>
                  <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                    <Icon type="Entypo" name='twitter-with-circle' style={{ fontSize: 50, color: '#55acee', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                    <Icon type="Entypo" name='facebook-with-circle' style={{ fontSize: 50, color: '#3b5998', margin: 5 }} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                    <Icon type="Entypo" name='linkedin-with-circle' style={{ fontSize: 50, color: '#0077b5', margin: 5 }} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Container>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  incontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#aaaaaa',
    backgroundColor: '#D1DED7'
  },
  imagestyle: {
    marginTop: 10,
    height: 100,
    width: 100,
    borderRadius: 50
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  line: {
    fontSize: 15,
    textAlign: 'center',
  },
  social: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10, marginRight: 10,
  }
});
