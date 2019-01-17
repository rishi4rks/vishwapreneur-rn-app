import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Label,
  Input,
  Button,
  ScrollView
} from 'native-base';
export default class ProfileScreen extends React.Component {
  render() {
    return (
      <Container
        style={{ backgroundColor: '#41474C', flex: 1, FlexDirection: 'column', justifyContent: 'center', }}>

        <Content>
          <View style={{ alignItems: 'center', marginTop: 70 }}>
            <Image
              source={require('../../images/vishwapreneur_logo.png')}
              style={{ height: 200, width: 200 }}
            />
          </View>

          <View style={{ alignItems: 'center', paddingTop: 20 }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>
              Login
            </Text>
          </View>

          <Form >
            <Item floatingLabel >
              <Label style={{color: 'white'}}>Username</Label>
              <Input style={{ color: 'white' }} />
            </Item>
            <Item floatingLabel>
              <Label style={{color: 'white'}}>Password</Label>
              <Input secureTextEntry = {true} /> 
            </Item>
          </Form>
          <Text>{'\n\n\n'}</Text>
          <View style={{ justifyContent: 'center' }}>
            <Button block success>
              <Text>Success</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}