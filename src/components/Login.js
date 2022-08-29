import * as React from 'react';
import { Image, Text, StyleSheet, View, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import { postLogin, saveData, getToken, getRoleCode } from '../service/login.service';


const Login = ({ navigation }) => {
    const [login, setLogin] = React.useState({
        userUsername: "",
        userPassw: ""
    })
    const [showPassword, setShowPassword] = React.useState(true)

    const changeShowPassword = () => {
        setShowPassword(() => {
            return !showPassword
        })
    }

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
        postLogin(login).then(async (res) => {
            if (res.data) {
                await saveData(res.data);
                const roleCode = await getRoleCode()
                if(roleCode === 'SA1'){
                    navigation.navigate('RoleList');
                } else if (roleCode == 'HR2') {
                    navigation.navigate('TestHeaderList')
                }
            }
        })
    }


    return (
        <View style={styles.container}>
            {/* <ImageBackground source={require('../assets/images/Coding.jpg')} > */}
            {/* </ImageBackground> */}

            <Image
                source={require('../assets/images/checklist.png')}
                style={{ width: 150, height: 150, marginBottom: 10 }}
                borderRadius={50}
            />
            <Text>
                Welcome To Bootcamp Test
            </Text>
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
                secureTextEntry={showPassword}
                value={login.userPassw}
                onChangeText={(userPassw) => handleChangePassword(userPassw)}
                right={login.userPassw.length > 0 && <TextInput.Icon icon="eye" onPress={changeShowPassword} />}
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginButton: {
        marginTop: 10,
        width: 275,
    },
    textInput: {
        marginVertical: 10,
        width: 275,
    }
})

export default Login;