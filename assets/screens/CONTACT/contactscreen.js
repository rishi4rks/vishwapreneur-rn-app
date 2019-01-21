import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Linking, StatusBar } from 'react-native';
import {Icon, Container, Content, Header } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Constants, Font } from 'expo';
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
      <ScrollView>
        <Container style={{
          backgroundColor: '#D1DED7',
          flex: 1,
          FlexDirection: 'column',
          justifyContent: 'center',
          paddingTop: Constants.statusBarHeight
        }}>
          <Header style={{ backgroundColor: 'white', elevation: 10 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <StatusBar
                barStyle='light-content'
                translucent={false}
              />
              {
                this.state.fontLoaded ? (
                  <Text style={{ fontFamily: 'Batmanforever', fontSize: 35, color: 'black' }}>
                    VISHWAPRENEUR
                </Text>
                ) : null
              }
            </View>
          </Header>
          <Content>
            <View>

              <View style={{ paddingTop: 10 }}>
                <Icon name='ios-call' style={{ fontSize: 50, color: 'blue', textAlign: 'center' }} />
                <Text style={styles.title}>PHONE</Text>
                <TouchableOpacity onPress={() => Linking.openURL('tel:+91-9404507342')}>
                  <Text style={styles.line}>
                    +91-9404-507-342
              </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL('tel:+91-9403612979')}>
                  <Text style={styles.line}>
                    +91-9403-612-979
              </Text>
                </TouchableOpacity>
              </View>

              <View style={{ paddingTop: 10 }}>
                <Icon name='ios-mail' style={{ fontSize: 50, color: 'blue', textAlign: 'center' }} />
                <Text style={styles.title}>EMAIL</Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:atharva.puranik@viit.ac.in')}>
                  <Text style={styles.line}>
                    atharva.puranik@viit.ac.in
              </Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                <Icon type="MaterialIcons" name="location-on" style={{ fontSize: 50, color: 'blue', textAlign: 'center' }} />
                <Text style={styles.title}>ADDRESS</Text>
                <TouchableOpacity onPress={() => Linking.openURL("https://www.google.co.in/maps/dir/''/entrepreneurship+development+cell+viit/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bc2eaf473dfa6d3:0x254f86fb9c3da40d?sa=X&ved=0ahUKEwjc_4z0qNPaAhVCPo8KHdqgBYQQ9RcIkgEwCw")}>
                  <Text style={styles.line}>S.No.3 &amp; 4, Entrepreneurship Development </Text>
                  <Text style={styles.line}>Cell, VIIT, Kondhwa BK., Pune, </Text>
                  <Text style={styles.line}>Maharashtra 411048</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('Developers', {})}>
              <View style={styles.button}>
                <Text style={styles.textstyle}>
                  Developers Screen!
            </Text>
              </View>
            </TouchableOpacity>
          </Content>
        </Container>
      </ScrollView>
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
    //paddingTop: 25,
    fontSize: 25,
  },
  line: {
    textAlign: 'center',
    fontSize: 22,
    paddingTop: 5,
  },
  button: {
    borderColor: 'blue',
    backgroundColor: 'blue',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginLeft: 10,
    marginRight: 10
  },
  textstyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }
});