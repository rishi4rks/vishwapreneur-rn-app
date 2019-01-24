import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Linking, StatusBar } from 'react-native';
import { Icon, Container, Content, Header, Button } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Constants, Font } from 'expo';
import Ripple from 'react-native-material-ripple';

import Developer from './Developerscreen'


class ContactusScreen extends React.Component {
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
        <Content style={{ paddingHorizontal: 12, paddingTop: 20, paddingBottom: 30 }}>
          <View>

            <View style={{ paddingHorizontal: 15, paddingVertical: 10, borderBottomColor: '#aaaaaa', borderBottomWidth: 1 }}>
              <Icon name='ios-call' style={{ fontSize: 50, color: '#224DB8', textAlign: 'center' }} />
              <Text style={styles.title}>PHONE</Text>
              <TouchableOpacity onPress={() => Linking.openURL('tel:+91-8788963858')}>
                <Text style={styles.line}>
                  +91 87889 63858
              </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('tel:+91-9860177674')}>
                <Text style={styles.line}>
                  +91 98601 77674
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ paddingHorizontal: 15, paddingVertical: 10, borderBottomColor: '#aaaaaa', borderBottomWidth: 1 }}>
              <TouchableOpacity onPress={() => Linking.openURL('mailto:vishwapreneur@gmail.com')}>
                <Icon name='ios-mail' style={{ fontSize: 50, color: '#D44638', textAlign: 'center' }} />
              </TouchableOpacity>
              <Text style={styles.title}>EMAIL</Text>
              <TouchableOpacity onPress={() => Linking.openURL('mailto:vishwapreneur@gmail.com')}>
                <Text style={styles.line}>
                  vishwapreneur@gmail.com
              </Text>
              </TouchableOpacity>
            </View>

            <View style={{ paddingHorizontal: 15, paddingVertical: 10, borderBottomColor: '#aaaaaa', borderBottomWidth: 1 }}>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.google.co.in/maps/dir/''/entrepreneurship+development+cell+viit/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bc2eaf473dfa6d3:0x254f86fb9c3da40d?sa=X&ved=0ahUKEwjc_4z0qNPaAhVCPo8KHdqgBYQQ9RcIkgEwCw")}>
                <Icon type="MaterialIcons" name="location-on" style={{ fontSize: 50, color: '#0F9D58', textAlign: 'center' }} />
              </TouchableOpacity>
              <Text style={styles.title}>ADDRESS</Text>
              <TouchableOpacity onPress={() => Linking.openURL("https://www.google.co.in/maps/dir/''/entrepreneurship+development+cell+viit/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bc2eaf473dfa6d3:0x254f86fb9c3da40d?sa=X&ved=0ahUKEwjc_4z0qNPaAhVCPo8KHdqgBYQQ9RcIkgEwCw")}>
                <Text style={styles.line}>S.No.3 &amp; 4, Entrepreneurship Development Cell, VIIT, Kondhwa BK., Pune, Maharashtra 411048</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Button
            block
            style={styles.buttons}
            onPress={() => this.props.navigation.navigate('Developers', {})}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
              }}>
              Developers
              </Text>
            <Icon name="code" type='Entypo' style={{
              fontSize: 22,
              color: 'white',
            }} />
          </Button>
        </Content>
      </Container>
    );
  }
}

const AppStackNavigation = createStackNavigator({
  ConatctUS: { screen: ContactusScreen },
  Developers: { screen: Developer }

});

export default createAppContainer(AppStackNavigation);

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white'
  },
  line: {
    textAlign: 'center',
    fontSize: 22,
    paddingTop: 5,
    color: 'white'
  },
  button: {
    borderColor: '#87908B',
    backgroundColor: 'blue',
    borderRadius: 20,
    borderWidth: 2,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 20,
    paddingVertical: 20
  },
  textstyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  buttons: {
    backgroundColor: 'rgba(156,153,152,.29)',
    borderRadius: 15,
    padding: 7,
    textAlign: 'center',
    alignItems: 'center',
    margin: 20,
    marginBottom: 50,
  }
});