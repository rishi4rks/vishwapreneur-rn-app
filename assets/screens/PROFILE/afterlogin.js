import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Constants, Font } from 'expo';
import { Container, Content, Header } from 'native-base';

export default class afterlogin extends React.Component {
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
    this.state={
      ScreenName: this.props.navigation.state.params.ScreenName,
      Receiptno: this.props.navigation.state.params.Receiptno,
      Phoneno: this.props.navigation.state.params.Phoneno,
      Category: this.props.navigation.state.params.Category,
      Email: this.props.navigation.state.params.Email,
      Amtrem: this.props.navigation.state.params.Amtrem,
    }
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

        <Content style={{ padding: 25 }}>
        
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.textWithShadow}>Hi, {this.state.ScreenName}</Text>
          </View>

          <View style={{ paddingBottom: 15, paddingLeft: 15, marginVertical: 25 }}>
            <Text style={styles.content}>Receipt no. :  {this.state.Receiptno}</Text>
            <Text style={styles.content}>Phone :  {this.state.Phoneno}</Text>
            <Text style={styles.content}>Category :  {this.state.Category}</Text>
            <Text style={styles.content}>Email :  {this.state.Email}</Text>
            <Text style={styles.content}>Amount remaining :  {this.state.Amtrem}</Text>
          </View>

          <View style={{ paddingHorizontal: 25, borderBottomColor: '#aaaaaa', borderBottomWidth: 1.5 }} />

          <View style={styles.incontainer}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.passcontent}>
                Your pass will appear here on the day of the event.
              </Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textWithShadow: {
    textShadowColor: 'rgba(250, 250, 250, .5)',
    textShadowOffset: { width: -1, height: 1 },
    fontSize: 35,
    color: 'white',
    fontWeight: '500',
  },
  content: {
    fontWeight: '200',
    color: 'white',
    fontSize: 18,
    paddingBottom: 10,
  },
  incontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    borderColor: '#F97F51',
    borderStyle: 'dashed',
    borderWidth: 5,
    borderRadius: 7,
    position: 'relative',
    padding: 100,
    marginTop: 50,
    backgroundColor: '#444',
    marginBottom: 50,
  },
  passcontent: {
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 15,
    color: 'gray',
  },
});
