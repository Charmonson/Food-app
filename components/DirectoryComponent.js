import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { CAKES } from '../shared/cakes';

class Directory extends Component { //class component to store state data
   
    constructor(props) {
        super(props);
        this.state = {
            cakes: CAKES
        };
    }
   
    //js keyboard that sets a method on the class itself rather than the object instantiated from the class 
   
    static navigationOptions = {
        title: 'Directory'
    };
   
    render(){
        const { navigate } = this.props.navigation;
        const renderDirectoryItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    onPress={()=> navigate ('CakeInfo', { cakeId: item.id })} //calling navigatingOptions method
                    leftAvatar={{ source: require('./images/chocolate.jpg')}}
                />
            );
        };
    
        return (
            <FlatList
                data={this.state.cakes}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );

    }

}

export default Directory;