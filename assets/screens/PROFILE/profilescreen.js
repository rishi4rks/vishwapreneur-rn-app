import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Header, Container, Content, Icon, Button } from 'native-base';
import { Constants, Font } from 'expo';
import register from './register';
import afterlogin from './afterlogin';

class login extends React.Component {
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
  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      userPassword: ''
    }
  }

  login = () => {
    const { userEmail, userPassword } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userEmail == "") {
      //alert("Please enter Email address");
      this.setState({ email: 'Please enter Email address' })

    }

    else if (reg.test(userEmail) === false) {
      //alert("Email is Not Correct");
      this.setState({ email: 'Email is Not Correct' })
      return false;
    }

    else if (userPassword == "") {
      this.setState({ email: 'Please enter password' })
    }
    else {

      fetch('https://hardeepwork.000webhostapp.com/react/login.php', {
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          // we will pass our input data to server
          email: userEmail,
          password: userPassword
        })

      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson == "ok") {
            // redirect to profile page
            alert("Successfully Login");
            this.props.navigation.navigate("PROFILE");
          } else {
            alert("Wrong Login Details");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }


    Keyboard.dismiss();
  }

  render() {
    return (
      <Container
        style={{
          backgroundColor: '#282828',
          flex: 1,
          FlexDirection: 'column',
          justifyContent: 'center',
          paddingTop: Constants.statusBarHeight,
        }}>
        <Header style={{ backgroundColor: '#555656', elevation: 10 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
              this.state.fontLoaded ? (
                <Text style={{ fontFamily: 'Batmanforever', fontSize: 25, color: 'white' }}>
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

                <Text style={styles.title}>Login</Text>
                <TextInput
                  placeholder="Username"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordInput.focus()}
                  style={styles.input}
                  onChangeText={userEmail => this.setState({ userEmail })}
                />
                <TextInput
                  placeholder="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="done"
                  secureTextEntry
                  style={styles.input}
                  ref={input => (this.passwordInput = input)}
                  onChangeText={userPassword => this.setState({ userPassword })}
                />
                <Button
                  block
                  style={styles.loginButton}
                  onPress={() => alert("COMING SOON..")}
                  // onPress={() => this.props.navigation.navigate('PROFILE', {})}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      color: 'white',
                    }}>{"\t"}
                    GET PASS
                    </Text>
                  <Icon name="login" type='MaterialCommunityIcons' style={{
                    fontSize: 22,
                    color: 'white',
                  }} />
                </Button>

                <Text style={{ marginBottom: 6, color: 'white' }}>Don't have a Pass?</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('REGISTER')}>
                  <Text
                    style={{
                      textDecorationLine: "underline",
                      fontWeight: "500",
                      fontSize: 16,
                      fontStyle: 'italic',
                      marginBottom: 4,
                      color: 'white'
                    }}>
                    Book Now!
              </Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </Content>
      </Container>
    );
  }
}

const AppStackNavigation = createStackNavigator({
  
  LOGIN: { screen: login},
  PROFILE: {screen: afterlogin},
  REGISTER: {screen: register},
});
export default createAppContainer(AppStackNavigation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282828"
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
    backgroundColor: "green",
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
    marginVertical: 20,
    color: 'white'
  }
});