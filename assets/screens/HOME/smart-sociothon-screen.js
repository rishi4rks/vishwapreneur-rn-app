import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  StatusBar
} from 'react-native';
import {
  Content,
  Container,
  Header
} from 'native-base';
import { Constants, Font } from 'expo';

export default class SmartSociothon extends React.Component {
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Batmanforever': require('../../fonts/batmfa.ttf'),
      'Roboto': require("native-base/Fonts/Roboto.ttf"),
      'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf"),
      'Raleway': require('../../fonts/Raleway-Bold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  static navigationOptions = { header: null };
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#282828',
          flex: 1,
          FlexDirection: 'column',
          justifyContent: 'center',
          paddingTop: Constants.statusBarHeight,
        }}>
        <Header style={{ backgroundColor: '#555656', elevation: 10 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar
              barStyle='light-content'
              translucent={false}
            />
            {
              this.state.fontLoaded ? (
                <Text style={{ fontFamily: 'Batmanforever', fontSize: 25, color: 'white' }}>
                  VISHWAPRENEUR
                </Text>
              ) : null
            }
          </View>
        </Header>

        <Content>
          <View style={{ backgroundColor: '#EEEEEE' }}>
            <View style={{ alignItems: 'center', marginBottom: 10, paddingTop: 15 }}>
              <Image
                source={require('../../images/hackathon.png')}
                style={{
                  height: 200,
                  width: 200,
                }}>
              </Image>
            </View>
            <View style={{ paddingHorizontal: 25, borderBottomColor: '#aaaaaa', borderBottomWidth: 1, alignSelf: 'stretch', paddingBottom: 10 }}>
              <Text style={styles.venueDetails}>
                Feburary 7, 2019{"\n"}Lokshahir Annabhau Sathe Auditorium, Satara Road, Pune
            </Text>
            </View>
          </View>
          <View style={{ alignItems: 'center', paddingVertical: 15, borderBottomColor: '#aaaaaa', borderBottomWidth: 1 }}>
            <View style={{ alignItems: 'center', paddingBottom: 15 }}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.inststyle}>
                    In association with
                </Text>
                ) : null
              }
            </View>
            <View style={{ paddingVertical: 10 }}>
              <Image
                source={require('../../images/smartcity.jpg')}
                style={{
                  height: 130,
                  width: 130
                }} />
            </View>
          </View>
          <View style={{ paddingHorizontal: 10, paddingVertical: 15, paddingBottom: 10, borderBottomColor: '#aaaaaa', borderBottomWidth: 1, alignSelf: 'stretch' }}>
            <View style={{ alignItems: 'center', paddingBottom: 15 }}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.inststyle}>
                    Introduction
                </Text>
                ) : null
              }
            </View>
            <Text />
            <View style={{ padding: 10 }}>
              <Text style={{
                fontSize: 15,
                color: 'white',
                flex: 1,
                justifyContent: 'center',
                paddingHorizontal: 10
              }}>
                'Smart Sociothon' is a social hackathon based on the theme 'smart city’, an opportunity envisioning to strategize and create innovative solutions of real-life social problems. Its an initiative to enable the start-up community to produce technical solutions. Its a team event to develop and not just ideate the solution by creating a prototype. Wining team will be given a  certificate and cash prize.
              </Text>
            </View>
          </View>

          <View style={{ alignItems: 'center', paddingVertical: 15 }}>
            <View style={{ alignItems: 'center', paddingBottom: 15 }}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.inststyle}>
                    Event Day Rules
                </Text>
                ) : null
              }
            </View>
            <View style={{ padding: 10, paddingHorizontal: 20 }}>
              <Text style={styles.rules}> 1. Reporting time on 7th Feburary at 4pm sharp.</Text>
              <Text style={styles.rules}> 2. WiFi, table, chair, charging point, notepad and pen will be provided. No other materials will be provided.</Text>
              <Text style={styles.rules}> 3. Materials should be strictly assembled on the spot.</Text>
              <Text style={styles.rules}> 4. Detailed presentation of the entire solution must be presented.</Text>
              <Text style={styles.rules}> 5. Prize distribution will take place on 9th Feburary at 4:30pm.</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  venueDetails: {
    fontSize: 20,
    textAlign: 'center',
    color: '#212121'
  },
  Heading: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },

  textWithShadow: {
    textShadowColor: 'rgba(60, 60, 60, .9)',
    textShadowOffset: { width: 2, height: 2 },
    fontSize: 30,
    color: 'white',
  },
  contentFont: {
    textShadowColor: 'rgba(60, 60, 60, 1)',
    textShadowOffset: { width: 2, height: 2 },
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttons: {
    backgroundColor: 'rgb(0,40,180)',
    borderRadius: 15,
    padding: 7,
    textAlign: 'center',
    alignItems: 'center'
  },
  rules: {
    fontSize: 15,
    color: 'white',
    paddingBottom: 15
  },
  inststyle: {
    fontSize: 25,
    fontFamily: 'Raleway',
    color: 'white'
  },
});