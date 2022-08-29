
import React, { useEffect, useState } from "react"
import { FlatList, View, Text, StyleSheet } from "react-native"
import { getRoles } from "../../../service/role.service"
import { Text as TextPaper, IconButton } from 'react-native-paper'

export const RoleList = ({ navigation }) => {

    const [data, setData] = useState([])

    const getData = () => {
        getRoles().then((res) => {
            setData(() => {
                return res.data
            })
        })
    }

    useEffect(() => {
        getData()
    }, [])

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
                        style={{alignSelf: 'flex-end'}}
                    />
                    <IconButton
                        icon="circle-edit-outline"
                        size={20}
                        style={{alignSelf: 'flex-end'}}
                    />
                </View>

            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}

            />
        </View>
    )

}
const styles = StyleSheet.create({
    container_item: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        marginVertical: 10,
        borderEndWidth: 1
        // borderBottomWidth: 1,
        // borderTopWidth: 1
    },
    actions: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        flex: 1,
        // borderBottomWidth: 1
    }
})