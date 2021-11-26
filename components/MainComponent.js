import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CakeInfo from './CakeInfoComponent';
import {View} from 'react-native';
import { CAKES } from '../shared/cakes';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cakes: CAKES,
            selectedCake: null
        };
    }
//event handler
    onCakeSelect(cakeId){
        this.setState({selectedCake: cakeId});
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Directory 
                cakes={this.state.cakes}
                onPress={cakeId => this.onCakeSelect(cakeId)} 
                />
                <CakeInfo
                    cake={this.state.cakes.filter(
                        cake => cake.id === this.state.selectedCake)[0]}
                    //pass entire object not just property, use .filter array property to do so
                />
            </View>
        );
    }
}

export default Main;