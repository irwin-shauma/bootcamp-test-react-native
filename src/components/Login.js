import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { postLogin, saveData, getToken } from '../service/login.service';


const Login = ({navigation}) => {
    const [login, setLogin] = React.useState({
        userUsername: "",
        userPassw: ""
    })

    const handleChangeUsername = (userUsername) => {

        setLogin(() => {
            return { ...login, userUsername }
        })
    }
    const handleChangePassword = (userPassw) => {

        setLogin(() => {
            return { ...login, userPassw }
        })
    }
    const handleLogin = () => {
        postLogin(login).then( async (res) => {
            await saveData(res.data);
            navigation.navigate('Details');
        })
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                label='Email'
                mode='outlined'
                value={login.userUsername}
                onChangeText={(userUsername) => handleChangeUsername(userUsername)}
            />
            <TextInput
                style={styles.textInput}
                label='Password'
                mode='outlined'
                secureTextEntry={true}
                value={login.userPassw}
                onChangeText={(userPassw) => handleChangePassword(userPassw)}
            />
            <Button
                style={styles.loginButton}
                icon='login'
                mode='contained'
                onPress={() => handleLogin()}
            >
            LOGIN
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: 'center'
    },
    loginButton: {
        marginTop: 10,
        width: 275,
        alignSelf: 'center'
    },
    textInput: {
        marginVertical: 10,
        width: 275,
        alignSelf: 'center'
    }
})

export default Login;