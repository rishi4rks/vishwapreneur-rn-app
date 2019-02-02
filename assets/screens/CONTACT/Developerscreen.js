import React, { Component } from 'react';
import { Text } from 'react-native';
import { Constants, Font } from 'expo';
import { ScrollView, View, Image, TouchableOpacity, Linking, StyleSheet, StatusBar } from 'react-native';
import { Icon, Header, Container, Content } from 'native-base';

export default class Developer extends Component {
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
      <Container style={{ paddingTop: Constants.statusBarHeight, backgroundColor: '#282828' }}>
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
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.incontainer}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={styles.imagestyle} source={require('../../images/adi1.jpg')} />
                  <Text style={styles.title}>Aditya Jangid</Text>
                  <Text style={styles.line}>EDC,VIIT</Text>
                  <View style={styles.social}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/ossm_aj?s=08")}>
                      <Icon type="FontAwesome" name='twitter' style={styles.twitter} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/aditya.jangid.torqk")}>
                      <Icon type="FontAwesome" name='facebook' style={styles.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/aditya-jangid-287a06133/")}>
                      <Icon type="FontAwesome" name='linkedin' style={styles.linkedin} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.incontainer}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={styles.imagestyle} source={require('../../images/guru1.jpg')} />
                  <Text style={styles.title}>Gurudas Padhar</Text>
                  <Text style={styles.line}>EDC,VIIT</Text>
                  <View style={styles.social}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/GurudasPadhar?s=08")}>
                      <Icon type="FontAwesome" name='twitter' style={styles.twitter} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=100005761236244")}>
                      <Icon type="FontAwesome" name='facebook' style={styles.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/gurudas-padhar-2a8624138/")}>
                      <Icon type="FontAwesome" name='linkedin' style={styles.linkedin} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.incontainer}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={styles.imagestyle} source={require('../../images/avi1.jpeg')} />
                  <Text style={styles.title}>Avnish Oswal</Text>
                  <Text style={styles.line}>EDC,VIIT</Text>
                  <View style={styles.social}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/AvnishOswal")}>
                      <Icon type="FontAwesome" name='twitter' style={styles.twitter} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/avnish.oswal")}>
                      <Icon type="FontAwesome" name='facebook' style={styles.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/avnish-oswal-8a1b92151/")}>
                      <Icon type="FontAwesome" name='linkedin' style={styles.linkedin} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.incontainer}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={styles.imagestyle} source={require('../../images/megh1.jpeg')} />
                  <Text style={styles.title}>Megha Chandwani</Text>
                  <Text style={styles.line}>EDC,VIIT</Text>
                  <View style={styles.social}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/meghachandwani_")}>
                      <Icon type="FontAwesome" name='twitter' style={styles.twitter} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/mcdevildeva")}>
                      <Icon type="FontAwesome" name='facebook' style={styles.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/megha-chandwani-860bb815b/")}>
                      <Icon type="FontAwesome" name='linkedin' style={styles.linkedin} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.incontainer}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={styles.imagestyle} source={require('../../images/rishi1.jpeg')} />
                  <Text style={styles.title}>Rishikesh Shede</Text>
                  <Text style={styles.line}>EDC,VIIT</Text>
                  <View style={styles.social}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/RishikeshShede")}>
                      <Icon type="FontAwesome" name='twitter' style={styles.twitter} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/rishikesh.shede.403")}>
                      <Icon type="FontAwesome" name='facebook' style={styles.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/rishikesh-shede/")}>
                      <Icon type="FontAwesome" name='linkedin' style={styles.linkedin} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.incontainer}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={styles.imagestyle} source={require('../../images/pp1.jpg')} />
                  <Text style={styles.title}>Prasad Patil</Text>
                  <Text style={styles.line}>EDC,VIIT</Text>
                  <View style={styles.social}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/pp_17_")}>
                      <Icon type="FontAwesome" name='twitter' style={styles.twitter} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/profile.php?id=100007469433075")}>
                      <Icon type="FontAwesome" name='facebook' style={styles.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/prasad-patil-674765159/")}>
                      <Icon type="FontAwesome" name='linkedin' style={styles.linkedin} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.container}>
              <View style={styles.incontainer}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={styles.imagestyle} source={require('../../images/ayush1.jpeg')} />
                  <Text style={styles.title}>Ayush Shah</Text>
                  <Text style={styles.line}>EDC,VIIT</Text>
                  <View style={styles.social}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/AyushSh66402152?s=08")}>
                      <Icon type="FontAwesome" name='twitter' style={styles.twitter} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/ayush.shah.5492")}>
                      <Icon type="FontAwesome" name='facebook' style={styles.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/ayush-shah-28b771159")}>
                      <Icon type="FontAwesome" name='linkedin' style={styles.linkedin} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.incontainer}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Image style={styles.imagestyle} source={require('../../images/saket1.jpeg')} />
                  <Text style={styles.title}>Saket Pawar</Text>
                  <Text style={styles.line}>EDC,VIIT</Text>
                  <View style={styles.social}>
                    <TouchableOpacity onPress={() => Linking.openURL("https://twitter.com/saketpawar1999?s=08")}>
                      <Icon type="FontAwesome" name='twitter' style={styles.twitter} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.facebook.com/pawar.pawarsaket")}>
                      <Icon type="FontAwesome" name='facebook' style={styles.facebook} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL("https://www.linkedin.com/in/saket-pawar-276b7415a")}>
                      <Icon type="FontAwesome" name='linkedin' style={styles.linkedin} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>

    );
  }
}


const styles = StyleSheet.create({
  wrapper: {
    paddingTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  incontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#aaaaaa',
    backgroundColor: '#282828'
  },
  imagestyle: {
    marginTop: 10,
    height: 100,
    width: 100,
    borderRadius: 50
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
  line: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white'
  },
  social: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10, marginRight: 10,
  },
  twitter: {
    fontSize: 25,
    margin: 10,
    color: '#55acee'
  },
  facebook: {
    fontSize: 25,
    margin: 10,
    color: '#3b5999'
  },
  linkedin: {
    fontSize: 25,
    margin: 10,
    color: '#0077B5'
  }
});
