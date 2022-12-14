import React, { useEffect, useState } from "react"
import { FlatList, View, Text, StyleSheet } from "react-native"
import { getRoles } from "../../../service/role.service"
import { Text as TextPaper, IconButton, Button, BottomNavigation, AnimatedFAB } from 'react-native-paper'
import { useDispatch, useSelector } from "react-redux"
import { retrieveRoles, removeRole } from '../../../redux/actions/roleAction'
import { clearData } from "../../../service/login.service";

export const RoleList = ({ navigation }) => {

    const roles = useSelector(state => state.roles)
    const dispatch = useDispatch()

    const [data, setData] = useState([])

    const getData = () => {
        getRoles().then((res) => {
            setData(() => {
                return res.data
            })
        })
    }

    useEffect(() => {
        dispatch(retrieveRoles())
    }, [])

    const handleInsert = (() => {
        navigation.navigate("RoleCreate")
    })

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container_item}>
                <TextPaper variant="headlineSmall">{item.id}. </TextPaper>
                <View>
                    <Text style={{ fontWeight: 'bold' }} >Role Name : {item.roleName}</Text>
                    <Text>Role Code : {item.roleCode}</Text>
                </View>
                <View style={styles.actions}>
                    <IconButton
                        icon="delete-circle"
                        size={20}
                        style={{ alignSelf: 'flex-end' }}
                        onPress={() => {
                            dispatch(removeRole(item.id))
                            navigation.navigate('RoleList')
                        }}
                    />
                    <IconButton
                        icon="circle-edit-outline"
                        size={20}
                        style={{ alignSelf: 'flex-end' }}
                        onPress={() => {
                            // dispatch(removeRole(item.id))
                            navigation.navigate('RoleUpdate', {
                                roleId: item.id
                            })
                        }}
                    />
                </View>

            </View>
        )
    }

    return (
        <View style={{ borderWidth: 1, flex: 1 }}>
            <FlatList
                data={roles}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <Button
                style={styles.loginButton}
                icon='login'
                mode='contained'
                onPress={async () => {
                    await clearData()
                    navigation.replace('Login')
                }}
            >
                LOGOUT
            </Button>
            <AnimatedFAB
                icon={'plus'}
                label={'Add Role'}
                // extended={true}
                onPress={() => handleInsert()}
                visible={true}
                animateFrom={'right'}
                iconMode={'static'}
                style={[styles.fabStyle]}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    container_item: {
        flexDirection: 'row',
        marginVertical: 10,
        borderEndWidth: 1
    },
    actions: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        flex: 1,
    },
    loginButton: {
        marginTop: 10,
        width: 275,
        alignSelf: 'center'
    },
    fabStyle: {
        bottom: 16,
        right: 16,
        position: 'absolute',
    },
})