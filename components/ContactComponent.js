import React, { Component } from 'react';
import {ScrollView, Image} from 'react-native';
import {Card, Text} from 'react-native-elements';



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
            
            //almost not quite there yet
            <ScrollView>
                        
                <Card title='Contact Information'
                    wrapperStyle={{margin: 15}}>
                <Text> Wonderland Bakery </Text> 
                <Text> San Antonio, TX 78123 </Text>
                <Text> Phone: 210-444-1113</Text>
                <Text> wonderlandbakery@gmail.com</Text>
                </Card>
                <Image style={{width:400, height: 800 }}source={require('./images/confetti.jpg')}/>  
                
            </ScrollView>
            
        );
    }
}

export default Contact;