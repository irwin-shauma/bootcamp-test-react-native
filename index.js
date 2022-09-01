/**
 * @format
 */
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import App from './App';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login';
import { RoleList } from './src/screens/role/role-list/RoleList';
import { TestHeaderList } from './src/screens/test-header/test-header-list/TestHeaderList';
import { HRHomescreen } from './src/screens/hr-homescreen/HRHomescreen';
import { CandidateHomescreen } from './src/screens/candidate-homescreen/CandidateHomescreen';

const theme = {
    ...DefaultTheme,
    roundness: 2,
    version: 3,
    colors: {
        ...DefaultTheme.colors,
        primary: '#7FB77E'
    }
}

export default function Main() {
    const Stack = createNativeStackNavigator();
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                    <Stack.Screen name="RoleList" component={RoleList} />
                    <Stack.Screen name="HRHomescreen" component={HRHomescreen} />
                    <Stack.Screen name="TestHeaderList" component={TestHeaderList} />
                    <Stack.Screen name="CandidateHomescreen" component={CandidateHomescreen} />
                </Stack.Navigator>
            </NavigationContainer>
            {/* <App /> */}
        </PaperProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
// AppRegistry.registerComponent(appName, () => App);
