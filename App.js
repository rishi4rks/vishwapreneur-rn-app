import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './assets/screens/HOME/homescreen';
import ProfileScreen from './assets/screens/PROFILE/profilescreen';
import InstructionsScreen from './assets/screens/INSTRUCTIONS/instructionscreen';
import ContactusScreen from './assets/screens/CONTACT/contactscreen';


const TabNavigator = createBottomTabNavigator(
  {
    HOME: { screen: HomeScreen},
    PASS: { screen: ProfileScreen },
    INSTRUCTIONS: { screen: InstructionsScreen },
    CONTACT: { screen: ContactusScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HOME') {
          iconName = 'ios-home';
        } else if (routeName === 'PASS') {
          iconName = 'ios-key';
        } else if (routeName === 'INSTRUCTIONS') {
          iconName = 'ios-information-circle';
        } else if (routeName === 'CONTACT') {
          iconName = 'ios-call';
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
      },
    }
    ),
    tabBarOptions: {
      activeTintColor: '#E1E1E1',
      inactiveTintColor: '#191919',
      activeBackgroundColor: '#555656',
      inactiveBackgroundColor: '#555656'
    },
  }
  );

export default createAppContainer(TabNavigator);