import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  Image
} from "react-native";
import { Header, Container, Content, Icon, Button } from 'native-base';
import { Constants, Font } from 'expo';

export default class login extends Component {
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
      <Container
        style={{
          backgroundColor: '#D1DED7',
          flex: 1,
          FlexDirection: 'column',
          justifyContent: 'center',
          paddingTop: Constants.statusBarHeight,
        }}>
        <Header style={{ backgroundColor: 'white', elevation: 10 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
              this.state.fontLoaded ? (
                <Text style={{ fontFamily: 'Batmanforever', fontSize: 25, color: 'black' }}>
                  VISHWAPRENEUR
                </Text>
              ) : null
            }
          </View>
        </Header>

        <Content padder>
          <View style={styles.container}>
            <ScrollView>
              <StatusBar barStyle="dark-content" backgroundColor="white" />
              <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.container}>
                  <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <Image
                      source={require('../../images/12345.png')}
                      style={{ height: 200, width: 200 }}
                    />
                  </View>
                  <Text style={styles.title}>Login</Text>
                  <TextInput
                    placeholder="Username"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    style={styles.input}
                  />
                  <TextInput
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="done"
                    secureTextEntry
                    style={styles.input}
                    ref={input => (this.passwordInput = input)}
                  />
                  <Button
                    block
                    style={styles.loginButton}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'white',
                      }}>{"\t"}
                      Login
                    </Text>
                    <Icon name="login" type='MaterialCommunityIcons' style={{
                      fontSize: 22,
                      color: 'white',
                    }} />
                  </Button>

                  <Text style={{ marginBottom: 6 }}>Don't have an Account?</Text>
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      fontWeight: "500",
                      fontSize: 16,
                      marginBottom: 4
                    }}>
                    Book Now
              </Text>
                </View>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D1DED7"
  },
  input: {
    backgroundColor: "#838C88",
    marginBottom: 14,
    height: 50,
    paddingHorizontal: 18,
    width: 300,
    borderRadius: 10,
  },
  loginButton: {
    backgroundColor: "#0F0AAD",
    paddingVertical: 10,
    marginBottom: 40,
    width: 300,
    borderRadius: 10,
  },
  ButtonText: {
    fontSize: 22,
    textAlign: "center",
    height: 30,
    color: "white",
    fontWeight: "bold"
  },
  title: {
    fontFamily: "sans-serif-light",
    fontWeight: "bold",
    fontSize: 36,
    color: "black",
    marginVertical: 20
  }
});