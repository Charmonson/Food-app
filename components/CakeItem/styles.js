import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

    cakeContainer:{
        width: '100%',
        height: Dimensions.get('window').height,
      },

      titles: {
        marginTop: '5%',
        width: '100%',

      },

      title:{
        fontSize: 50,
        fontWeight: 'bold',
        color:'#ffffff',
        padding:30,
        textShadowColor: '#bb0201',
        textShadowOffset: { width: 0.9, height: 0.9 },
        textShadowRadius: 30,
        alignItems: 'center',
      },

      subtitle:{
        marginTop: '75%',
        alignItems: 'center',
        fontSize: 20,
        fontWeight:'bold',
        color:'#ffff',
        padding: 30, 
        textShadowColor: '#bb0201',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 30,
      },

      image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position:'absolute',//so it doesn't push other components down
      },
      buttonsContainer:{
        position:'absolute',
        bottom: 40,
        width: '100%'
      }

});

export default styles;