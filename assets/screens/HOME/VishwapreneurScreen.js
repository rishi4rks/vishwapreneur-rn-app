import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import {
  Content,
  Container,
  H1,
  H3,
  Button,
  CardItem,
  Body,
  Card,
} from 'native-base';
import { Constants } from 'expo';

export default class Vishwapreneur extends React.Component {
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
            <H1 style={{ fontWeight: 'bold', fontSize: 30 }}>
              MANIFEST THE NEXT
            </H1>
            <H1 style={{ fontWeight: 'bold' }}>WITH</H1>
            <H1 style={{ fontWeight: 'bold' }}>VISHWAPRENEUR</H1>
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
              MAHATMA PHULE SANSKRUTIK
            </Text>
            <Text style={styles.venueDetails}>
              BHAVAN, WANOWRIE, PUNE
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
              style={{
                backgroundColor: 'rgb(0,140,0)',
                borderRadius: 25,
                padding: 15,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                Book Now
              </Text>
            </Button>
            <Text />
            <Button
              block
              style={{
                backgroundColor: 'rgb(0,40,180)',
                borderRadius: 25,
                padding: 15,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: 'white',
                }}>
                Openfloor
              </Text>
            </Button>
          </View>

          <View style={{ alignItems: 'center', paddingBottom: 10 }}>
            <H3 style={{ fontWeight: 'bold' }}>About Us</H3>
          </View>
          <View style={{ paddingHorizontal: 15 }}>
            <Text style={{ fontSize: 16 }}>
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

          <View style={{ alignItems: 'center', paddingVertical: 20 }}>
            <H3 style={{ fontWeight: 'bold' }}>Sessions</H3>
          </View>

          <Card style={{ alignItems: 'center', paddingVertical: 10, marginBottom: 10 }}>
            <ImageBackground
                source={require('../../images/keynotes.jpg')} borderRadius={15}
                style={{
                  height: 100,
                  width: null,
                  flex: 1,
                  justifyContent: 'space-evenly',
                }}>
                
            </ImageBackground>
          </Card>
          <Card>
            <CardItem
              button
              onPress={() => alert('Will be directed to another page')}>
              <View>
                <Text>PANEL DISCUSSION</Text>
              </View>
            </CardItem>
          </Card>
          
            
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  venueDetails: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});