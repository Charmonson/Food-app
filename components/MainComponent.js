import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CakeInfo from './CakeInfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Constants from 'expo-constants';
import {View, Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


const DirectoryNavigator = createStackNavigator( //the follwoing argument defines whihc components will be available for the stack 
    {
       
        Directory: { screen: Directory },
        CakeInfo: { screen: CakeInfo },
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

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
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

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
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

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
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


const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        Directory: { screen: DirectoryNavigator },
        About: {screen: AboutNavigator},
        Contact: {screen:ContactNavigator}        
    },
    {
        drawerBackgroundColor: '#A69FB3'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

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