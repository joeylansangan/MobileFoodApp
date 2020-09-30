import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return(
    <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Button 
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  )
}

const DetailsScreen = ({navigation}) => {
  return(
    <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button 
        title="Go to home screen"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  )
}

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;