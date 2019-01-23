import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import {
  Container,
  Header,
  H1,
  H3,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  ScrollView,
  Icon,
  H2
} from 'native-base';
import Ripple from 'react-native-material-ripple';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Profile2Screen from '../PROFILE/profile2screen';

class ProfileScreen extends React.Component {
  static navigationOptions = { header: null };
  render() {
    return (
       // <Header><H1>VISHWAPRENEUR</H1></Header>
      <Container style={{alignItems:'center',justifyContent:'center',backgroundColor:'white'}}> 
        <Content style={{paddingTop:30}}>
          
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              paddingTop:10,
              paddingBottom:20
            }}>
            <H1>Welcome,Username</H1>
            <H3>Manifest the next with VISHWAPRENEUR</H3>
          </View>
          
          <View style={{flex:1,borderColor:'black',borderWidth:1,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
          <View style={{}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>
                Regular Pass
              </Text>
            </View>
            <Icon type="MaterialCommunityIcons" name='ticket-account' style={{fontSize: 100, color: 'silver',margin: 5}}/>
            <H3 style={{padding:5}}>Balance :XXX</H3>
            <H3 style={{padding:5}}>Name :Sample Full Name</H3>
            <H3 style={{padding:5}}>Reciept No :####</H3>
            <H3 style={{padding:5}}>Unique Id :######</H3>
          </View>
          <Text>{'\n'}</Text>
          <View style={{flex:1,borderColor:'black',borderWidth:1,borderRadius:10,justifyContent:'center',alignItems:'center'}}>
            <View style={{}}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>
                VIP Pass
              </Text>
            </View>
            <Icon type="MaterialCommunityIcons" name='ticket-account' style={{fontSize: 100, color: 'gold',margin: 5}}/>
            <H3 style={{padding:5}}>Name :Sample Full nAme</H3>
            <H3 style={{padding:5}}>Reciept No :####</H3>
            <H3 style={{padding:5}}>Unique Id :######</H3>
          </View>
          
        </Content>
      </Container>
    )
  }
}
const AppStackNavigation=createStackNavigator({
  Profile :{screen: ProfileScreen},
  Login :{screen: Profile2Screen}
  
});

export default createAppContainer(AppStackNavigation);