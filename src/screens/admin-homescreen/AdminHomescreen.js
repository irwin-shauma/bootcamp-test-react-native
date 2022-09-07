import React from "react"
import { Pressable, StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"

export const AdminHomescreen = ({ navigation }) => {
    const handleRoleList = () => {
        navigation.navigate('RoleList')
    }

    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{ color: 'black', borderless: false }}
                style={styles.pressable}
                onPressIn={handleRoleList}
            >
                <Text>Role List</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    pressable: {
        width: 100,
        height: 100,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        borderWidth: 1
    }
})