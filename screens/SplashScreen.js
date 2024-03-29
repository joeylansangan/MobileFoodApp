import React from 'react';
import { 
    View, Text, Button, TouchableOpacity, 
    Image, StyleSheet, Dimensions 
} from 'react-native';

import {useTheme} from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

MaterialIcons.loadFont();

const SplashScreen = ({navigation}) => {

    const {colors} = useTheme();

    return(
      <View style={styles.container}>
          <View style={styles.header}>
              <Animatable.Image 
                animation="bounceIn"
                source={require('./assets/swipewhitetrans.png')}
                style={styles.logo}
                resizeMode="stretch"
              />
          </View>
          <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background  
            }]} 
            animation="fadeInUpBig"
            >
                <Text style={styles.title}>Support your local restaurants!</Text>
                <Text style={styles.text}>Sign in with account</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                    <LinearGradient
                            colors={['#9b1b24', '#ef473a']}
                            style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons
                            name="navigate-next"
                            color="#fff"
                            size={20}
                            />
                    </LinearGradient>
                </TouchableOpacity>
               </View>
          </Animatable.View>
      </View>
    )
  }

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.12;
const height_width = height_logo * 2;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#9b1b24'
  },
  header: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      position: "absolute",
      width: height_width,
      height: height_logo
  },
  title: {
      color: '#9b1b24',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  }

});