import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  ListItem,
  List,
} from 'native-base';
import { View, StatusBar, StyleSheet } from 'react-native';
import { Constants, Font } from 'expo';


export default class InstructionsScreen extends Component {
  static navigationOptions = { header: null };
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Batmanforever': require('../../fonts/batmfa.ttf'),
      'Raleway': require('../../fonts/Raleway-ExtraBold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <Container style={{
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
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 15 }}>
            {
              this.state.fontLoaded ? (
                <Text style={styles.inststyle}>
                  Instructions
                </Text>
              ) : null
            }
          </View>
          <List>

            <ListItem style={styles.hrbreak}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.raleway}>» Steps to be followed by participants for logging in:</Text>
                ) : null
              }
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>1)  Username: firstname_receiptno (Ex. aditya_007){"\n"}{"\t"}{"\t"} Default Password: vp_2019</Text>
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>2)  For participants registered online, Receipt No. and Unique ID for entry will be provided on the day of the event.</Text>
            </ListItem>

            <ListItem style={styles.hrbreak}>
              {
                this.state.fontLoaded ? (
                  <Text style={styles.raleway}>» To be followed on the day of the event:</Text>
                ) : null
              }
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>1)  Bring your receipt.</Text>
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>2)  Bring your valid ID proof.</Text>
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>3)  Check your details in profile.</Text>
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>4)  App is mandatory on the day of the event.(For iOS users, login can be done using the website.)</Text>
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>5)  Pass will be generated after reporting.</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  hrbreak: {
    borderBottomColor: '#aaaaaa',
    borderBottomWidth: 1,
  },
  inststyle: {
    fontSize: 26,
    borderLeftColor: '#151716',
    borderLeftWidth: 1,
    borderRightColor: '#151716',
    borderRightWidth: 1,
    paddingHorizontal: 15,
    color: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    fontFamily: 'Raleway',
    fontSize: 25,
    color: 'white'
  },
  details: {
    color: 'white',
  },
  raleway: {
    color: 'white',
    fontFamily: 'Raleway'
  },
});
