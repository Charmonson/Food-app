import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles.js';

const CakeItem = (props) => {

  const {name, description, image }= props.cake;


  return (
    <View style={styles.cakeContainer}>

      <ImageBackground source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{description}</Text>

      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Menu & Pricing"}
          onPress={() => {
            
            console.warn("Let's get you some sugar!");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Let's make things sweeter...");
          }}
        />
      </View>

    </View>

  );
};

export default CakeItem;