
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-redux';
import Login from './src/components/Login'
import { store } from './src/redux/store';
// import { View, StyleSheet, Text } from 'react-native';
import Home from './src/screens/Home'


const App = () => {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
  // const Stack = createNativeStackNavigator();
  // return (
  //   <NavigationContainer>
  //     <Stack.Navigator>
  //       <Stack.Screen name="Login" component={Login} />
  //       {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
  //     </Stack.Navigator>
  //   </NavigationContainer>
  // )
}

export default App;
