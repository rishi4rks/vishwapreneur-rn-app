import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  H1,
  H2,
  H3,
  Text,
  ListItem,
  List,
} from 'native-base';
import { View } from 'react-native';
import { Font } from 'expo';


export default class InstructionsScreen extends Component {
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
      <Container style={{
        backgroundColor: '#D1DED7',
        flex: 1,
        FlexDirection: 'column',
        justifyContent: 'center',
      }}>
        <Header transparent>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
              this.state.fontLoaded ? (
                <Text style={{ fontFamily: 'Batmanforever', fontSize: 35, color: '#000' }}>
                  VISHWAPRENEUR
                </Text>
              ) : null
            }
          </View>

        </Header>
        <Content>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 30,
            }}>

            <H1 style={{ fontWeight: 'bold' }}>INSTRUCTIONS</H1>
          </View>
          <List>
            <ListItem>
              <View >
                <Text style={{ fontWeight: 'bold' }}>» Steps to be followed by participants for logging in:</Text>
              </View>
            </ListItem>
            <ListItem>
              <Text>1)  Username: firstname_recirptno (Ex. aditya_007){"\n"}{"\t"}{"\t"} Default Password: vp_2019</Text>
            </ListItem>
            <ListItem>
              <Text>2)  Check your details in profile.</Text>
            </ListItem>
            <ListItem>
              <Text>3)  Update information or password if required.</Text>
            </ListItem>
            <ListItem>
              <Text>4)  App is mandatory on the day of the event.</Text>
            </ListItem>
            <ListItem>
              <Text>5)  Pass will be generated on the day of the event after reporting.</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
