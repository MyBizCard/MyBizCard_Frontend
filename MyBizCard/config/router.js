import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import CardHolder from '../components/CardHolder';

export const CardHolderStack = StackNavigator({
    CardHolder: {
        screen: Cardholder,
        navigationOptions: {
            title: 'CardHolder'
        }
    },
    Details: {
        screen: 
    }
})