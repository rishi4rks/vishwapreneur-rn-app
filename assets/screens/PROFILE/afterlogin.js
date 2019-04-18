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
    await Font.loadAsync({
      'Raleway': require('../../fonts/Raleway-ExtraBold.ttf'),
    });

    this.setState({ fontLoaded: true });
  }


  constructor(props) {
    super(props);
    this.state = {
      ScreenName: this.props.navigation.state.params.ScreenName,
      Receiptno: this.props.navigation.state.params.Receiptno,
      Phoneno: this.props.navigation.state.params.Phoneno,
      Category: this.props.navigation.state.params.Category,
      Email: this.props.navigation.state.params.Email,
      Amtrem: this.props.navigation.state.params.Amtrem,
      Report: this.props.navigation.state.params.Report,
      UniqueID: this.props.navigation.state.params.UniqueID
    };
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
            {
              this.state.fontLoaded ? (
                <Text style={styles.textWithShadow}>Hi, {this.state.ScreenName}</Text>
              ) : null
            }
          </View>

          <View style={{ paddingBottom: 15, paddingLeft: 15, marginVertical: 25 }}>
            <Text style={styles.content}>Receipt no. :  {this.state.Receiptno}</Text>
            <Text style={styles.content}>Phone :  {this.state.Phoneno}</Text>
            <Text style={styles.content}>Category :  {this.state.Category}</Text>
            <Text style={styles.content}>Email :  {this.state.Email}</Text>
            <Text style={styles.content}>Amount remaining :  {this.state.Amtrem}</Text>
          </View>

          <View style={{ paddingHorizontal: 25, borderBottomColor: '#aaaaaa', borderBottomWidth: 1.5 }} />
            {
              (this.state.Category == 'Convention-VIP' && this.state.Report == 'Reported') ?(
                <View style={styles.vipcontainer}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.vippasscontent}>
                    Your Unique ID is :   {this.state.UniqueID}
                    </Text>
                  </View>
                </View>
              ): null
            }
            {
              (this.state.Category == 'Convention-Regular' && this.state.Report == 'Reported') ?(
                <View style={styles.regcontainer}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.regpasscontent}>Your Unique ID is :   {this.state.UniqueID}
                    </Text>
                  </View>
                </View>
              ): null
            }
            {
              (this.state.Report == 'Not Reported') ?(
                <View style={styles.mccontainer}>
                  <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.mcpasscontent}>
                      Your pass will appear when you report for the event.
                    </Text>
                  </View>
                </View>
              ): null
            }

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textWithShadow: {
    textShadowColor: 'rgba(250, 250, 250, .5)',
    
    fontSize: 35,
    color: 'white',
    fontFamily: 'Raleway',
  },
  content: {
    fontWeight: '200',
    color: 'white',
    fontSize: 18,
    paddingBottom: 10,
  },
  mccontainer: {
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
  vipcontainer: {
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
    backgroundColor: 'rgba(255,215,0,.8)',
    marginBottom: 50,
  },
  regcontainer: {
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
    backgroundColor: '#0b40c9',
    marginBottom: 50,
  },
  vippasscontent: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 15,
    color: 'black',
  },
  regpasscontent: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 15,
    color: 'white',
  },
  mcpasscontent: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 15,
    color: 'white',
  },

});
