import React from 'react';
import {View, Text, ScrollView, StyleSheet, StatusBar, Image, TouchableOpacity, Button} from 'react-native';
import {useTheme} from '@react-navigation/native';


const HomeScreen = ({navigation}) => {
  
  const { colors } = useTheme();

  const theme = useTheme();

    return(
      <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
        <StatusBar barstyle={ theme.dark ? "light-content" : "dark-content" } />
        <Text style={{color: colors.text}}>HomeScreen</Text>
        <Button 
          title="Go to details screen"
          onPress={() => navigation.navigate("Details")}
        />
      </View>
    )
  }

export default HomeScreen;