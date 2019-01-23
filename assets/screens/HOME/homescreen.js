import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Card,
  Icon
} from 'native-base';
import Ripple from 'react-native-material-ripple';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Image, View, ImageBackground, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import { Constants, Font } from 'expo';
import ActionButton from 'react-native-action-button';

import Vishwapreneur from './VishwapreneurScreen';
import edcviit from './edcviitscreen';
import smartsociothon from './smart-sociothon-screen';
import register from './register';


class Home extends Component {

  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Batmanforever': require('../../fonts/batmfa.ttf'),
      'Roboto': require("native-base/Fonts/Roboto.ttf"),
      'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  static navigationOptions = { header: null };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      {
        this.state.fontLoaded ? (
        <Container
          style={{
            backgroundColor: '#D1DED7',
            flex: 1,
            FlexDirection: 'column',
            justifyContent: 'center',
            paddingTop: Constants.statusBarHeight,
          }}>

          <Header style={{ backgroundColor: 'white', elevation: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <StatusBar
                barStyle='light-content'
                translucent={false}
              />
              {
                this.state.fontLoaded ? (
                  <Text style={{ fontFamily: 'Batmanforever', fontSize: 25, color: 'black' }}>
                    VISHWAPRENEUR
                </Text>
                ) : null
              }
            </View>
          </Header>

          <ActionButton buttonColor="rgb(240,50,40)" style={styles.actionButtonStyle}
            renderIcon={<Icon name='ticket' type='FontAwesome' style={{ fontSize: 22, color: 'white' }} />}
            renderIcon={active => active ? (<Icon name='ticket' type='FontAwesome' style={{ fontSize: 22, color: 'white' }} /> ) : (<Icon name='ticket' type='FontAwesome' style={{ fontSize: 22, color: 'white' }} />)}
            onPress={() => this.props.navigation.navigate('REGISTER')}
          />

          <Content padder>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
              <Image
                source={require('../../images/12345.png')}
                style={{ height: 200, width: 200 }}
              />
            </View>

            <Text>{'\n'}</Text>

            <Button block onPress={() => this.props.navigation.navigate('REGISTER')}
              style={{ backgroundColor: 'rgb(0,140,0)', borderRadius: 25, marginHorizontal: 80, marginBottom: 25, elevation: 3 }}>
              <Text />
              <Icon name="ticket" type='FontAwesome' style={{
                fontSize: 22,
                color: 'white',
              }} />
              <Text style={{
                fontSize: 17,
                color: 'white',
              }}>
                Register Now!
                </Text>
              <Text />
            </Button>


            <Card style={{ marginBottom: 20, borderRadius: 15 }}>
              <Ripple rippleColor="rgb(60,60,60)" onPress={() => this.props.navigation.navigate('VishwapreneurScreen', {
                itemId: 86,
                otherParam: 'Vishwapreneur',
              })}>

                <ImageBackground
                  source={require('../../images/background_small.png')} borderRadius={15}
                  style={{
                    height: 200,
                    width: null,
                    flex: 1,
                    justifyContent: 'space-evenly',
                  }}>
                  <Text /><Text />
                  <View style={{ alignItems: 'center', }}>
                    <Text
                      style={styles.textWithShadow}>
                      About
                  </Text>
                    <Text
                      style={styles.textWithShadow}>
                      Vishwapreneur
                  </Text>
                  </View>
                  <Text />
                  <View style={{ alignItems: 'flex-end', paddingRight: 20 }} >
                    <Text>
                      <Icon name="ios-arrow-forward" type="Ionicons" style={{ fontSize: 35, color: 'white' }} />
                    </Text>
                  </View>
                </ImageBackground>
              </Ripple>
            </Card>


            <Card style={{ marginBottom: 20, borderRadius: 15 }}>
              <Ripple rippleColor="rgb(200,200,200)" onPress={() => this.props.navigation.navigate('SMARTSOCIOTHON')}>
                <ImageBackground
                  source={require('../../images/smart-sociothon1.jpg')} borderRadius={15}
                  style={{
                    height: 200,
                    width: null,
                    flex: 1,
                    justifyContent: 'space-evenly',
                  }}>
                  <Text /><Text />
                  <View style={{ alignItems: 'center', }}>
                    <Text
                      style={styles.textWithShadow}>
                      Smart Sociothon
                </Text>
                  </View>
                  <Text />
                  <View style={{ alignItems: 'flex-end', paddingRight: 20 }} >
                    <Text>
                      <Icon name="ios-arrow-forward" type="Ionicons" style={{ fontSize: 35, color: 'white' }} />
                    </Text>

                  </View>
                </ImageBackground>
              </Ripple>
            </Card>

            <Card style={{ marginBottom: 20, borderRadius: 15 }}>
              <Ripple rippleColor="rgb(200,200,200)" onPress={() => this.props.navigation.navigate('EDCVIIT')}>
                <ImageBackground
                  source={require('../../images/background-edc.jpg')} borderRadius={15}
                  style={{
                    height: 200,
                    width: null,
                    flex: 1,
                    justifyContent: 'space-evenly',
                  }}>
                  <Text /><Text />
                  <View style={{ alignItems: 'center', }}>
                    <Text
                      style={styles.textWithShadow}>
                      Entrepreneurship
                </Text>
                    <Text
                      style={styles.textWithShadow}>
                      Development Cell
                </Text>
                  </View>
                  <Text />
                  <View style={{ alignItems: 'flex-end', paddingRight: 20 }} >
                    <Text>
                      <Icon name="ios-arrow-forward" type="Ionicons" style={{ fontSize: 35, color: 'white' }} />
                    </Text>
                  </View>
                </ImageBackground>
              </Ripple>
            </Card>
          </Content>
        </Container>
        ) : null
      }
      </SafeAreaView>
    );
  }
}

const AppStackNavigation = createStackNavigator({
  HomeScreen: { screen: Home },
  VishwapreneurScreen: { screen: Vishwapreneur },
  EDCVIIT: edcviit,
  SMARTSOCIOTHON: smartsociothon,
  REGISTER: register,
});

export default createAppContainer(AppStackNavigation);


const styles = StyleSheet.create({
  textWithShadow: {
    textShadowColor: 'rgba(60, 60, 60, .9)',
    textShadowOffset: { width: 2, height: 2 },
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  },
  floatingButton: {
    backgroundColor: 'rgb(0,0,0)',
    padding: 15,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    position: 'absolute',
    bottom: 0,
    right: 0,
    elevation: 5
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 25,
    color: 'white',
  },
  actionButtonStyle: {
    zIndex: 1,

  }
});