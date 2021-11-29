import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container:{
        width:'100%', //width of parent component
        padding: 10,
  },
    button: {
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
  },
    text:{
        fontSize: 20,
        fontWeight: '600',
        textTransform: 'uppercase',
  }

});

export default styles;