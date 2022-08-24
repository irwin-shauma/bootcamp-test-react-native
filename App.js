
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from './src/components/Login'
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Details" component={DetailsScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <Login />
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
      flex : 1,
      alignItems : 'center',
      justifyContent: 'center'
  }
})

export default App;
