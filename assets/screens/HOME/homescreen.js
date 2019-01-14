import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  Accordion,
  Button,
  Text,
  H1,
  Card,
  CardItem,
  Center,
  Thumbnail,
  Body
} from 'native-base';
import Ripple from 'react-native-material-ripple';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Image, View, ImageBackground, TouchableOpacity, StyleSheet, Linking } from 'react-native';

import Vishwapreneur from './VishwapreneurScreen';

class Home extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
          FlexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Content padder>
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Image
              source={require('../../images/vishwapreneur_logo.png')}
              style={{ height: 200, width: 200 }}
            />
          </View>

          <Text>{'\n'}</Text>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <H1 style={{ fontWeight: 'bold' }}>VISHWAPRENEUR</H1>
          </View>
          <Text>{'\n'}</Text>

          <Button block onPress={() => Linking.openURL('https://www.edcviit.com/vishwapreneur/register.html')}
            style={{ backgroundColor: 'rgb(0,140,0)', borderRadius: 25, marginHorizontal: 80, marginBottom: 30 }}>
            <Text />
            <Icon name="ticket" type='font-awesome' style={{
              fontSize: 25,
              color: 'white',
            }} />
            <Text style={{
              fontSize: 20,
              color: 'white',
            }}>
              Book Now
                </Text>
            <Text />
          </Button>


          <Card style={{ marginBottom: 20, borderRadius: 15 }}>
            <Ripple rippleColor="rgb(60,60,60)" onPress={() => this.props.navigation.navigate('VishwapreneurScreen', {})}>

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
                    <Icon name="angle-right" style={{ fontSize: 35, color: 'white' }} />
                  </Text>
                </View>
              </ImageBackground>
            </Ripple>
          </Card>


          <Card style={{ marginBottom: 20, borderRadius: 15 }}>
            <Ripple rippleColor="rgb(200,200,200)">
              <ImageBackground
                source={require('./smart-sociothon1.jpg')} borderRadius={15}
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
                    <Icon name="angle-right" style={{ fontSize: 35, color: 'white' }} />
                  </Text>

                </View>
              </ImageBackground>
            </Ripple>
          </Card>

          <Card style={{ marginBottom: 20, borderRadius: 15 }}>
            <Ripple rippleColor="rgb(200,200,200)">
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
                    <Icon name="angle-right" style={{ fontSize: 35, color: 'white' }} />
                  </Text>
                </View>
              </ImageBackground>
            </Ripple>
          </Card>

        </Content>
      </Container>
    );
  }
}

const AppStackNavigation = createStackNavigator({
  HomeScreen: { screen: Home },
  VishwapreneurScreen: { screen: Vishwapreneur }

});

export default createAppContainer(AppStackNavigation);


const styles = StyleSheet.create({
  textWithShadow: {
    textShadowColor: 'rgba(60, 60, 60, .9)',
    textShadowOffset: { width: 2, height: 2 },
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  }
});