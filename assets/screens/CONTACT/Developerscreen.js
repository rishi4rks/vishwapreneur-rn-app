import React, { Component } from 'react';
import { Text } from 'react-native';
import { Constants } from 'expo';
import { ScrollView, View, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import { SocialIcon } from 'react-native-elements';
export default class Developer extends Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <ScrollView contentContainerStyle={styles.wrapper}>

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


      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    //paddingTop: Constants.statusBarHeight,
    //height: 300,
    backgroundColor: 'white',
    marginTop:50
  },
  incontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#aaaaaa',
    backgroundColor: '#D1DED7',
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
    paddingTop: 10,
  },
  line: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 10,
  },
  social: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10, marginRight: 10,
    paddingBottom: 10
  }
});
