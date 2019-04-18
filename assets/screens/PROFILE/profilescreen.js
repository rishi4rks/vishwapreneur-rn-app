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
import register from '../HOME/register';
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
      username: '',
      password: '',

    }
  }

  loginp = () => {
    const { username, password, rcpt_no } = this.state;
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    let reg = /^[a-z0-9_.]*$/;
    if (username == "") {
      alert("Please enter Username");
      //this.setState({email:'Please enter Email address'})
      return false;
    }
    else if (reg.test(username) === false) {
      alert("Incorrect Username");
      //this.setState({email:'Email is Not Correct'})
      return false;
    }
    else if (password == "") {
      alert("Please Enter Password");
      //this.setState({email:'Please enter password'})
      return false;
    }
    else if (reg.test(password) === false) {
      alert("Incorrect Password");
      //this.setState({email:'Please enter password'})
      return false;
    }
    else if ((reg.test(username) === true) && (reg.test(password) === true)) {
      // alert("Successfully Logged in");
      //this.setState({email:'Please enter password'})
      fetch('https://www.edcviit.com/vishwapreneur/phps/loginapp.php', {
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          // we will pass our input data to server
          username: username,
          password: password,
        })

      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson["success"] == true) {
            // redirect to profile page
            //alert("Successfully Login");
            this.props.navigation.navigate("PROFILE", { ScreenName: responseJson["name"], UniqueID: responseJson["uid"], Receiptno: responseJson["rcpt_no"], Phoneno: responseJson["phone"], Category: responseJson["category"], Email: responseJson["email"], Amtrem: responseJson["balance"], Report: responseJson["reported"] });
          } 
          else {
            alert("Wrong Login Details");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    Keyboard.dismiss();
  }
  // else{

  // }
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
                  placeholder="Enter Username"
                  style={styles.input}
                  onChangeText={username => this.setState({ username })}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  secureTextEntry
                  onChangeText={password => this.setState({ password })}
                />
                <Button onPress={this.loginp} block style={styles.loginButton} >
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

  LOGIN: { screen: login },
  PROFILE: { screen: afterlogin },
  REGISTER: { screen: register },
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