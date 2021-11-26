import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CakeInfo from './CakeInfoComponent';
import Constants from 'expo-constants';
import {View, Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const DirectoryNavigator = createStackNavigator( //the follwoing argument defines whihc components will be available for the stack 
    {
        Directory: { screen: Directory },
        CakeInfo: { screen: CakeInfo }
    },
    {
       initialRouteName: 'Directory', //default to show this component
       defaultNavigationOptions: {
           headerStyle: {
               backgroundColor: '#3A3132'
           },
           headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
       }

    }

);

const AppNavigator = createAppContainer(DirectoryNavigator);

class Main extends Component {


    render() {
        return (
            <View 
                style={{
                    flex:1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                    }}
            >
                <AppNavigator/>
            </View>
        );
    }
}

export default Main;