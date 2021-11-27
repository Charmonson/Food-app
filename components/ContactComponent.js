import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import {Card} from 'react-native-elements';
import { Text} from 'react-native';


class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (

            <ScrollView>          
                <Card title='Contact Information'
                    wrapperStyle={{margin: 15}}>
                <Text> Wonderland Bakery </Text> 
                <Text> San Antonio, TX 78123 </Text>
                <Text> Phone: 210-444-1113</Text>
                <Text> wonderlandbakery@gmail.com</Text>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;