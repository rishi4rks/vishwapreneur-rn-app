import React, { Component } from 'react';
import { Text } from 'react-native';
import { Constants } from 'expo';
import { ScrollView, View, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';

import { SocialIcon } from 'react-native-elements';
export default class Developer extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.wrapper}>

        <View style={styles.container}>

          <View style={styles.incontainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.imagestyle} source={require('../../images/vishwapreneur_logo.png')} />
              <Text style={styles.title}>MYNAME</Text>
              <Text style={styles.line}>EDC,VIIT</Text>
              <View style={styles.social}>
                <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                  <SocialIcon
                    type='twitter'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                  <SocialIcon
                    type='facebook'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                  <SocialIcon
                    type='linkedin'
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.incontainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.imagestyle} source={require('../../images/vishwapreneur_logo.png')} />
              <Text style={styles.title}>MYNAME</Text>
              <Text style={styles.line}>EDC,VIIT</Text>
              <View style={styles.social}>
                <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                  <SocialIcon
                    type='twitter'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                  <SocialIcon
                    type='facebook'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                  <SocialIcon
                    type='linkedin'
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>


        <View style={styles.container}>

          <View style={styles.incontainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.imagestyle} source={require('../../images/vishwapreneur_logo.png')} />
              <Text style={styles.title}>MYNAME</Text>
              <Text style={styles.line}>EDC,VIIT</Text>
              <View style={styles.social}>
                <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                  <SocialIcon
                    type='twitter'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                  <SocialIcon
                    type='facebook'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                  <SocialIcon
                    type='linkedin'
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.incontainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.imagestyle} source={require('../../images/vishwapreneur_logo.png')} />
              <Text style={styles.title}>MYNAME</Text>
              <Text style={styles.line}>EDC,VIIT</Text>
              <View style={styles.social}>
                <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                  <SocialIcon
                    type='twitter'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                  <SocialIcon
                    type='facebook'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                  <SocialIcon
                    type='linkedin'
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>



        <View style={styles.container}>

          <View style={styles.incontainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.imagestyle} source={require('../../images/vishwapreneur_logo.png')} />
              <Text style={styles.title}>Rahul Kulkarni</Text>
              <Text style={styles.line}>EDC,VIIT</Text>
              <View style={styles.social}>
                <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                  <SocialIcon
                    type='twitter'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                  <SocialIcon
                    type='facebook'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                  <SocialIcon
                    type='linkedin'
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.incontainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Image style={styles.imagestyle} source={require('../../images/vishwapreneur_logo.png')} />
              <Text style={styles.title}>Rahul Kulkarni</Text>
              <Text style={styles.line}>EDC,VIIT</Text>
              <View style={styles.social}>
                <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/login?lang=en")}>
                  <SocialIcon
                    type='twitter'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/")}>
                  <SocialIcon
                    type='facebook'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/")}>
                  <SocialIcon
                    type='linkedin'
                  />
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
    paddingTop: Constants.statusBarHeight,
    height: 250,
    backgroundColor: 'white',
  },
  incontainer: {
    flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 5
  },
  imagestyle: {
    height: 80,
    width: 80,
    borderRadius: 40
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
  }
});
