import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './assets/screens/HOME/homescreen';
import ProfileScreen from './assets/screens/PROFILE/profilescreen';
import InstructionsScreen from './assets/screens/INSTRUCTIONS/instructionscreen';
import ContactusScreen from './assets/screens/CONTACT/contactscreen';


const TabNavigator = createBottomTabNavigator(
  {
    HOME: { screen: HomeScreen },
    PROFILE: { screen: ProfileScreen },
    INSTRUCTIONS: { screen: InstructionsScreen },
    CONTACTUS: { screen: ContactusScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HOME') {
          iconName = `ios-home`;
        } else if (routeName === 'PROFILE') {
          iconName = `ios-person`;
        } else if (routeName === 'INSTRUCTIONS') {
          iconName = `ios-information-circle`;
        } else if (routeName === 'CONTACTUS') {
          iconName = `ios-call`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }
    ),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#6C716E',
    },
  }
  );

export default createAppContainer(TabNavigator);