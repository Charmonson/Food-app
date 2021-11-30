import React, { Component } from 'react';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import CakeInfo from './CakeInfoComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import Tasting from './TastingComponent';
import Constants from 'expo-constants';
import {View, Platform, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';


const DirectoryNavigator = createStackNavigator( //the follwoing argument defines whihc components will be available for the stack 
    {
       
        Directory: { 
            screen: Directory,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                name='birthday-cake'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
                />
            })
        },

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
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#3A3132'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() =>navigation.toggleDrawer()}
            />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#3A3132'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='coffee'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() =>navigation.toggleDrawer()}
            />
        })
    }
);

const ContactNavigator = createStackNavigator(
    {
        Contact: { screen: Contact }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#3A3132'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='envelope'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() =>navigation.toggleDrawer()}
            />
        })
    }
);

const TastingNavigator = createStackNavigator(
    {
        Tasting: { screen: Tasting }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#3A3132'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='spoon'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);


const MainNavigator = createDrawerNavigator(
{
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                       
                    />
                )
            }
        },
        Directory: {
            screen: DirectoryNavigator,
            navigationOptions: {
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='birthday-cake'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        About: {
            screen: AboutNavigator,
            navigationOptions: {
                drawerLabel: 'About Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='coffee'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Contact: {
            screen: ContactNavigator,
            navigationOptions: {
                drawerLabel: 'Contact Us',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='envelope'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        Tasting: {
            screen: TastingNavigator,
            navigationOptions: {
                drawerLabel: 'Schedule a Tasting',
                drawerIcon: ({tintColor}) => (
                    <Icon
                        name='spoon'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                    />
                )
            }
        },
        
    },

    {
        drawerBackgroundColor: '#A69FB3',

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

const styles = StyleSheet.create({
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24,
        
    }
});

export default Main;