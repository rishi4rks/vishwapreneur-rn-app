import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  H1,
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
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 25,
            }}>

            <H1 style={styles.inststyle}>INSTRUCTIONS</H1>
          </View>
          <List>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details} fontWeight="bold">» Steps to be followed by participants for logging in:</Text>
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>1)  Username: firstname_recieptno (Ex. aditya_007){"\n"}{"\t"}{"\t"} Default Password: vp_2019</Text>
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>2)  Check your details in profile.</Text>
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>3)  Update information or password if required.</Text>
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>4)  App is mandatory on the day of the event.</Text>
            </ListItem>
            <ListItem style={styles.hrbreak}>
              <Text style={styles.details}>5)  Pass will be generated on the day of the event after reporting.</Text>
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
    borderRightColor: 'white'
  },
  details: {
    color: 'white'
  }
});