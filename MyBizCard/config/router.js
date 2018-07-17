import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import CardHolder from '../components/CardHolder';
import Settings from '../components/Settings';
import UserDetail from '../components/UserDetail';
import Owner from '../components/Owner';

export const CardHolderStack = createStackNavigator({
  CardHolder: {
    screen: CardHolder,
    navigationOptions: {
      title: 'CardHolder',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

export const Tabs = createBottomTabNavigator({
  CardHolder: {
    screen: CardHolderStack,
    navigationOptions: {
      tabBarLabel: 'CardHolder',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Owner: {
    screen: Owner,
    navigationOptions: {
      tabBarLabel: 'Owner',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});

export const SettingsStack = createStackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings here',
      //name on top of the screen page when tapped Settings on owner page
    },
  },
});

export const Root = createStackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});