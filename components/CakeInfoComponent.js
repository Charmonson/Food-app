import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderCake({cake}) { 
    if (cake) {
        return (
            <Card 
                featuredTitle={cake.name}
                image={require('./images/chocolate.jpg')}>
                <Text style={{margin: 10}}>
                    {cake.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

function CakeInfo(props) { //functional component that receives props
    return <RenderCake cake={props.cake} />;
}

export default CakeInfo;