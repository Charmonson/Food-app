import React, { Component } from 'react';
import {ScrollView, FlatList, Text } from 'react-native';
import {Card, ListItem } from 'react-native-elements';
import { EVENTS } from '../shared/events';

const Mission = () => {
    return (
        <Card >
            <Text style={{margin: 20}}>
                We create the best baked goods 
                made from scratch daily. We create 
                a warm athmosphere for our 
                customers rooted in quality. Our employes 
                can learn,grow and innovate while remaining true 
                to the roots of traditional English baking.
            </Text>
        </Card>    
    )
}

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: EVENTS,           
        };
    }

    static navigationOptions = {
        title: 'About'
    }

    render() {
        const renderEvent = ({ item }) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/redvelvet.jpg') }}
                />
            );
        };

        return (
            <ScrollView>
                <Mission/>
                    <Card title= 'Events'>
                        <FlatList
                        data={this.state.events}
                        renderItem={renderEvent}
                        keyExtractor={ item => item.id.toString()}/>
                    </Card>
                <FlatList data={this.state.cakes}
                renderItem={renderEvent}
                keyExtractor={ item => item.id.toString()}
                />
            </ScrollView>
        );
    }
}
export default About;