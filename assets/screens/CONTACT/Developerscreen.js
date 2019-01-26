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
                  <Image style={styles.imagestyle} source={require('../../images/avi.jpeg')} />
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
                  <Image style={styles.imagestyle} source={require('../../images/megh.jpeg')} />
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
                  <Image style={styles.imagestyle} source={require('../../images/rishi.jpeg')} />
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
                  <Image style={styles.imagestyle} source={require('../../images/pp.jpg')} />
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
