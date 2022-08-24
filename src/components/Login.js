import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { postLogin } from '../service/login.service';


const Login = () => {
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
        console.log(login);
        postLogin(login).then(res => {
            console.log(res);
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
        width: 250
    },
    loginButton: {
        marginTop: 10
    },
    textInput: {
        marginVertical: 10
    }
})

export default Login;