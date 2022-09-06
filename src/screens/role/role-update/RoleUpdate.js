import { StyleSheet, View } from "react-native"
import React, { useEffect, useState } from 'react'
import { getSingleRole } from "../../../service/role.service";
import { Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { modifyRole } from "../../../redux/actions/roleAction";

export const RoleUpdate = ({ route, navigation }) => {
    const { roleId } = route.params
    const [currentRole, setCurrentRole] = useState({
        id: null,
        roleName: "",
        roleCode: "",
        isActive: ""
    });


    const dispatch = useDispatch();

    const getRole = (id) => {
        getSingleRole(id)
            .then((res) => {
                const role = {
                    id: res.data.id,
                    roleName: res.data.roleName,
                    roleCode: res.data.roleCode,
                    isActive: res.data.isActive,
                    version: res.data.version
                }
                setCurrentRole(() => {
                    return role
                })
            })
    }

    useEffect(() => {
        getRole(roleId)
    }, [])

    const handleChangeRoleName = (roleName) => {
        setCurrentRole(() => {
            return { ...currentRole, roleName }
        })
    }
    const handleChangeRoleCode = (roleCode) => {
        setCurrentRole(() => {
            return { ...currentRole, roleCode }
        })
    }

    const handleUpdate = () => {
        const data = {
            id: currentRole.id,
            roleName: currentRole.roleName,
            roleCode: currentRole.roleCode,
            isActive: currentRole.isActive,
            version: currentRole.version
        }

        dispatch(modifyRole(data))
            // dispatch(modifyRole(currentRole))
            .then(() => {
                navigation.navigate('RoleList')
            })
            .catch((e) => {
                console.log(e, "Error here");
            })
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                label='Role Name'
                mode='outlined'
                value={currentRole.roleName}
                onChangeText={(roleName) => handleChangeRoleName(roleName)}
            />
            <TextInput
                style={styles.textInput}
                label='Role Code'
                mode='outlined'
                value={currentRole.roleCode}
                onChangeText={(roleCode) => handleChangeRoleCode(roleCode)}
            />
            <Button
                style={styles.loginButton}
                icon='login'
                mode='contained'
                onPress={() => handleUpdate()}
            >
                UPDATE
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