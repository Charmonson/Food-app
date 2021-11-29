import React from 'react';
import {View, FlatList, Dimensions } from 'react-native';
import CakeItem from '../CakeItem';

import styles from './styles';
import cakes from './cakes';

const CakesList = (props) => {

  return (
    <View style={styles.container}>
      <FlatList
        data={cakes}
        renderItem={({item}) => <CakeItem cake={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}//animation style
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}//based on screen size, import dimensions
      />
    </View>
  );
};

export default CakesList;