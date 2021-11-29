import React, {Component} from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card, Icon } from 'react-native-elements';
import { CAKES } from '../shared/cakes';
import { COMMENTS } from '../shared/comments';

function RenderCake(props) {
    
    const {cake} = props;

    if (cake) {
        return (
            <Card 
                featuredTitle={cake.name}
                image={require('./images/cherry-cupcake.jpg')}>
                <Text style={{margin: 10}}>
                    {cake.description}
                </Text>
                <Icon
                    name={props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#F5B6AE'
                    raised
                    reverse
                    onPress={() => props.favorite ? 
                        console.log('Already set as a favorite') : props.markFavorite()}
                />
            </Card>
        );
    }
    return <View />;
}

function RenderComments({comments}) { 

    const renderCommentItem = ({item}) => {
        return (
            <View style= {{margin:10}}>
                <Text style= {{fontSize: 14}}>{item.text}</Text>
                <Text style= {{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style= {{fontSize: 12}}>{`--${item.author}`}</Text>

            </View>
        );
    };

    return (
        <Card title='Comments'>
            <FlatList
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
 
}

class CakeInfo extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            cakes: CAKES,
            comments: COMMENTS,
            favorite: false
        };
    }

    markFavorite() {
        this.setState({favorite: true});
    }


    static navigationOptions = {
        title: 'Deliciousness Information'
    };

    render(){
        const cakeId = this.props.navigation.getParam('cakeId');
        const cake = this.state.cakes.filter(cake => cake.id === cakeId)[0];
        const comments = this.state.comments.filter(comment => comment.cakeId === cakeId);
        return (
            <ScrollView>
                <RenderCake cake={cake}
                favorite={this.state.favorite}
                markFavorite={() => this.markFavorite()}
                 />
                <RenderComments comments={comments} />
            </ScrollView>
        );
    }
    
}

export default CakeInfo;