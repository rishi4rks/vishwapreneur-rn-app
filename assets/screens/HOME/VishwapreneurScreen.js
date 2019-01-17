import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  iframe
} from 'react-native';
import {
  Content,
  Container,
  H1,
  H2,
  H3,
  Button,
  CardItem,
  Body,
  Card,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Constants, Font } from 'expo';

import register from './register';
import openfloor from './openfloor';

export default class Vishwapreneur extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'Batmanforever': require('../../fonts/batmfa.ttf'),
    });

    this.setState({ fontLoaded: true });
  }


  static navigationOptions = { header: null };

  render() {
    return (
      <Container
        style={{
          backgroundColor: '#D1DED7',
          flex: 1,
          FlexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Content padder>
          <View style={{ alignItems: 'center', marginTop: 50 }}>
            <Image
              source={require('../../images/12345.png')}
              style={{ height: 200, width: 200 }}
            />
          </View>
          <Text>{'\n'}</Text>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {
                this.state.fontLoaded ? (
                  <Text style={{ fontFamily: 'Batmanforever', fontSize: 35, color: '#000', textAlign: 'center' }}>
                    MANIFEST THE NEXT WITH VISHWAPRENEUR
                  </Text>
                ) : null
              }
            </View>
          </View>

          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Text />
            <Text style={styles.venueDetails}>
              8TH AND 9TH FEBRUARY, 2019
            </Text>
            <Text style={styles.venueDetails}>
              MAHATMA PHULE SANSKRUTIK BHAVAN, WANOWRIE, PUNE
            </Text>
          </View>
          <Text>{'\n'}</Text>

          <View
            style={{
              marginHorizontal: 100,
              marginBottom: 30,
            }}>
            <Button
              block
              style={styles.buttons}
              backgroundColor={'rgb(0,140,0)'}
              onPress={() => this.props.navigation.navigate('REGISTER')}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                }}>
                Book Now
              </Text>
            </Button>
            <Text />
            <Button
              block
              style={styles.buttons}
              onPress={() => { this.props.navigation.navigate('OPENFLOOR', {}); }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'white',
                }}>
                Openfloor
              </Text>
            </Button>
          </View>

          <View style={{ alignItems: 'center', paddingBottom: 15 }}>
            <H2 style={{ fontWeight: 'bold' }}>About Us</H2>
          </View>
          <View style={{ paddingHorizontal: 15, borderBottomColor: '#aaaaaa', borderBottomWidth: 1, alignSelf: 'stretch' }}>
            <Text style={{ fontSize: 16, textAlign: 'center', paddingBottom: 15 }}>
              Vishwapreneur is a National Level Entrepreneurship Convention — an
              event designed to inspire, invigorate and innovate ideas,
              businesses and dreams in all aspects of entrepreneurship. Call it
              passion or just a trend, entrepreneurship is slowly becoming the
              primary career choice for a lot of students. Seeing this changing
              landscape and the hundreds of inquisitive minds, Vishwapreneur was
              introduced. It was formulated in order to bring together
              entrepreneurs, investors, mentors and other successful
              industrialists on the same platform to gain the first-hand
              experience from individuals who are already excelling in their
              fields.
            </Text>
          </View>

          <View style={{ alignItems: 'center', paddingVertical: 25 }}>
            <H1 style={{ fontWeight: 'bold' }}>Sessions</H1>
          </View>

          <Card style={{ marginBottom: 20, borderRadius: 8 }}>
            <ImageBackground
              source={require('../../images/keynotes.jpg')} borderRadius={8}
              style={{
                height: 200,
                width: null,
                flex: 1,
                justifyContent: 'center',
                padding: 10,
              }}>
              <View style={{ alignItems: 'center', }}>
                <Text
                  style={styles.textWithShadow}>
                  KEYNOTES
                </Text>
              </View>
              <Text />
              <View style={{ padding: 10 }}>
                <Text style={styles.contentFont}>
                  An Inspirational Story And A Life Altering Lesson Are What You'll Take Home From Our Prominent Guests.
                  </Text>
              </View>
            </ImageBackground>
          </Card>
          <Card style={{ marginBottom: 20, borderRadius: 8 }}>
            <ImageBackground
              source={require('../../images/panel-discussion.jpg')} borderRadius={8}
              style={{
                height: 200,
                width: null,
                flex: 1,
                justifyContent: 'center',
                padding: 10,
              }}>
              <View style={{ alignItems: 'center', }}>
                <Text
                  style={styles.textWithShadow}>
                  PANEL DISCUSSION
                </Text>
              </View>
              <Text />
              <View style={{ padding: 10 }}>
                <Text style={styles.contentFont}>
                  A Gripping Discussion On A Particular Aspect Of A Start-Up By An Esteemed Panel.
                  </Text>
              </View>
            </ImageBackground>
          </Card>
          <Card style={{ marginBottom: 20, borderRadius: 8 }}>
            <ImageBackground
              source={require('../../images/openfloor.jpg')} borderRadius={8}
              style={{
                height: 200,
                width: null,
                flex: 1,
                justifyContent: 'center',
                padding: 10,
              }}>
              <View style={{ alignItems: 'center', }}>
                <Text
                  style={styles.textWithShadow}>
                  OPENFLOOR
                </Text>
              </View>
              <Text />
              <View style={{ padding: 10 }}>
                <Text style={styles.contentFont}>
                  A Chance To Interact With CXOs From Unsurpassable Establishments.
                  </Text>
              </View>
            </ImageBackground>
          </Card>
          <Card style={{ marginBottom: 20, borderRadius: 8 }}>
            <ImageBackground
              source={require('../../images/competitions.jpg')} borderRadius={8}
              style={{
                height: 200,
                width: null,
                flex: 1,
                justifyContent: 'center',
                padding: 10,
              }}>
              <View style={{ alignItems: 'center', }}>
                <Text
                  style={styles.textWithShadow}>
                  COMPETITIONS
                </Text>
              </View>
            </ImageBackground>
          </Card>

        </Content>
      </Container>
    );
  }
}

const AppStackNavigation = createStackNavigator({
  REGISTER: register,
  OPENFLOOR: openfloor,
});

const styles = StyleSheet.create({
  venueDetails: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  textWithShadow: {
    textShadowColor: 'rgba(60, 60, 60, .9)',
    textShadowOffset: { width: 2, height: 2 },
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  },
  contentFont: {
    textShadowColor: 'rgba(60, 60, 60, .9)',
    textShadowOffset: { width: 2, height: 2 },
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttons: {
    backgroundColor: 'rgb(0,40,180)',
    borderRadius: 25,
    padding: 15,
  },
  
});