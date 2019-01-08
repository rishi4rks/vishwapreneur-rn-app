import React from 'react';
import { Text, View, Image,  StyleSheet, ScrollView,TouchableOpacity,Linking } from 'react-native';
import { Button, Icon } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Constants  } from 'expo';
import Developer from './Developerscreen'


class ContactusScreen extends React.Component {
  render() {
      return (
        <ScrollView>
          <View style={{paddingTop:Constants.statusBarHeight,paddingBottom:20}}>
          
           <View style={{paddingTop:10}}>           
           <Icon name='ios-call' style={{fontSize: 40, color: 'blue', textAlign: 'center'}} />
            <Text style={styles.title}>PHONE</Text>
            <TouchableOpacity onPress={() => Linking.openURL('tel:+91-9404507342')}>
              <Text style={styles.line}>
                9404 507 342
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('tel:+91-9403612979')}>
              <Text style={styles.line}>
                9403 612 979
              </Text>
            </TouchableOpacity>
           </View>

           <View style={{paddingTop:10}}>
           <Icon name='ios-mail' style={{fontSize: 40, color: 'blue', textAlign: 'center'}} />
            <Text style={styles.title}>EMAIL</Text>
            <TouchableOpacity onPress={() => Linking.openURL('mailto:atharva.puranik@viit.ac.in')}>
              <Text style={styles.line}>
                atharva.puranik@viit.ac.in
              </Text>
            </TouchableOpacity>
            </View>
           <View style={{paddingTop:10}}>
           <Icon type="MaterialIcons" name="location-on" style={{fontSize: 40, color: 'blue', textAlign: 'center'}} />
            <Text style={styles.title}>ADDRESS</Text>
             <TouchableOpacity onPress={() => Linking.openURL("https://www.google.co.in/maps/dir/''/entrepreneurship+development+cell+viit/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bc2eaf473dfa6d3:0x254f86fb9c3da40d?sa=X&ved=0ahUKEwjc_4z0qNPaAhVCPo8KHdqgBYQQ9RcIkgEwCw")}>
              <Text style={styles.line}>S.No.3 &amp; 4, Entrepreneurship Development </Text>
              <Text style={styles.line}>Cell, VIIT, Kondhwa BK., Pune, </Text>
              <Text style={styles.line}>Maharashtra 411048</Text>
              </TouchableOpacity>
           </View>
          </View>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Developers',{})}>
          <View style={styles.button}>
            <Text style={styles.textstyle}>
              Developers Screen!
            </Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
    );
  }
}

const AppStackNavigation=createStackNavigator({
  ConatctUS :{screen: ContactusScreen},
  Developers :{screen: Developer}
  
});

export default createAppContainer(AppStackNavigation);

const styles=StyleSheet.create({
  title:{
      textAlign:'center',
      fontWeight:'bold',
      //paddingTop: 25,
      fontSize:25,
  },
  line:{
      textAlign:'center',
      fontSize:22,
      paddingTop:5,
  },
  button:{
    borderColor:'blue',
    backgroundColor:'blue',
    borderRadius:20,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    padding: 10,
    marginLeft:8,
    marginRight:8
  },
  textstyle:{
      color:'white',
      fontWeight:'bold',
      fontSize:20
  }
});