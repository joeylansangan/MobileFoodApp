import React from 'react';
import { View, Text, Button } from 'react-native';

const SignUpScreen = ({navigation}) => {
    return(
      <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
        <Text>Sign Up Screen</Text>
        <Button 
          title="Click Here"
          onPress={() => alert('Button Clicked')}
        />
      </View>
    )
  }

export default SignUpScreen;