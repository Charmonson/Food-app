import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles';

const StyledButton = (props) => {

  const { type, content, onPress } = props; // destructured to make 1 line
  const backgroundColor = type === 'primary' ? '#3a3132' : '#bb0201';
  const textColor = type === 'primary' ? '#FFFFFF' : '#FFFFFF';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      
      </Pressable>
    </View>
  );
};

export default StyledButton;

//pressable registers user touches & presses on the screen
//line 18 content in curly braces  make it a variable rather than simple text
//two different functionalities to the same button using props
//line 7 before destructure:
//const type= props.type;
//const content=props.content;
//const onPress=props.onPress;