import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useDispatch, connect } from "react-redux"
import { createRole } from "../../../redux/actions/roleAction";

export const RoleCreate = ({ navigation }) => {
    const initialRoleState = {
        roleCode: "",
        roleName: "",
    }
    const [role, setRole] = useState(initialRoleState)
    const [submitted, setSubmitted] = useState(false)
    const dispatch = useDispatch()
    // handle form dan savechange

    const saveRole = () => {
        const { roleName, roleCode } = role
        dispatch(createRole(roleName, roleCode))
            .then(() => {
                // setRole({
                //     roleName: data.roleName,
                //     roleCode: data.roleCode
                // })
                // setSubmitted(true)
                // console.log(data);
                navigation.navigate("RoleList")


            })
            .catch(e => {
                console.log(e);
            })

    }
    const newRole = () => {
        setRole(initialRoleState)
        setSubmitted(false)
    }

    const handleChangeRoleName = (roleName) => {
        setRole(() => {
            return { ...role, roleName }
        })
        console.log(role);
    }
    const handleChangeRoleCode = (roleCode) => {
        setRole(() => {
            return { ...role, roleCode }
        })
        console.log(role);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                label='Name'
                mode='outlined'
                value={role.roleName}
                onChangeText={(roleName) => handleChangeRoleName(roleName)}
            />
            <TextInput
                style={styles.textInput}
                label='Code'
                mode='outlined'
                value={role.roleCode}
                onChangeText={(roleCode) => handleChangeRoleCode(roleCode)}
            />
            <Button
                style={styles.loginButton}
                icon='login'
                mode='contained'
                onPress={() => saveRole()}
            >
                CREATE ROLE
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