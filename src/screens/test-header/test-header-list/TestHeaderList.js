import React, { useEffect, useState } from "react"
import { FlatList, View, StyleSheet } from "react-native"
import { Text } from "react-native-paper"
import { getTestHeaders } from '../../../service/test-header.service'

export const TestHeaderList = () => {
    const [data, setData] = useState([])

    const getData = () => {
        getTestHeaders().then((rest) => {
            setData(() => {
                return rest.data
            })
        })
    }

    useEffect(() => {
        getData()
    }, [])

    const renderItem = ({ item }) => {
        return (
            <View style={styles.container_item}>
                <Text variant="headlineSmall">{item.id}. </Text>
                <View>
                    <Text style={{ fontWeight: 'bold' }} >Test Name : {item.testCategoryName}</Text>
                    <Text>Test Title : {item.testTitle}</Text>
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
    }
})