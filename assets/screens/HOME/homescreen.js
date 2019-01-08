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
  Body,
  Icon
} from 'native-base';
import { Image, View, ImageBackground, TouchableOpacity} from 'react-native';
export default class Home extends Component {
  render() {
    return (
      <Container
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
          FlexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Header />
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
            <H1>VISHWAPRENEUR</H1>
          </View>
          <Text>{'\n'}</Text>
          <Card>
            <CardItem
              header
              style={{
                justifyContent: 'center',
                borderRadius: 50,
              }}>
              <Text>About</Text>
            </CardItem>
            <CardItem
              button
              onPress={() => alert('Will be directed to another page')}>
              <Body>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </Body>
            </CardItem>
            <CardItem
              footer
              button
              style={{ borderRadius: 50 }}
              onPress={() => alert('Will be directed to another page')}>
              <Text>
                More Info{' '}
                <Icon name="play" style={{ fontSize: 15, color: 'black' }} />
              </Text>
            </CardItem>
          </Card>

          {/* <View style={{ paddingBottom: 5, paddingHorizontal: 120 }}>
            <Button dark rounded>
              <Text />
              <Icon name="ticket" style={{ fontSize: 22, color: 'white' }} />
              <Text>Book Now</Text>
              <Text />
            </Button>
          </View> */}

          <Button iconLeft dark rounded>
          <Icon name="ios-pricetag"  />
            <Text>Settings</Text>
          </Button>
          
             <Card>
              <ImageBackground
                source={require('./smart-sociothon1.jpg')}
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 50,
                    color: 'white',
                  }}>
                  Smart Sociothon
                </Text>
                <Text style={{ alignItems: 'center' }}>
                  <Icon name="ios-play" style={{ fontSize: 30, color: 'white' }}
                  />
                </Text>
              </ImageBackground>
            </Card> 

            <Card>
            <CardItem header style={{ justifyContent: 'center', }}>
              <Text>Entrepreneurship Development Cell, VIIT</Text>
            </CardItem>
            <CardItem button onPress={() => alert('Will be directed to another page')}>
              <Body>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert('Will be directed to another page')}>
              <Text>
                More Info{' '}
                <Icon name="play" style={{ fontSize: 15, color: 'black' }} />
              </Text>
            </CardItem>
          </Card> 

        </Content>
      </Container>
    );
  }
}
