import { View, Pressable, StyleSheet } from 'react-native'
import { Button, Text, TouchableRipple } from 'react-native-paper'
import React from 'react'


export const HRHomescreen = ({ navigation }) => {
    const handlePressIn = () => {
        navigation.navigate('TestHeaderList')
    }
    const handleCreateTest = () => {
        navigation.navigate('HRCreateTest')
    }

    const handleAssignTest = () => {
        navigation.navigate('HRAssignTest')
    }

    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{ color: 'black', borderless: false }}
                style={styles.pressable}
                onPressIn={handlePressIn}
            >
                <Text>Create Candidate</Text>
            </Pressable>
            <Pressable
                android_ripple={{ color: 'black', borderless: false }}
                style={styles.pressable}
                onPressIn={handleCreateTest}
            >
                <Text>Create Test</Text>
            </Pressable>
            <Pressable
                android_ripple={{ color: 'black', borderless: false }}
                style={styles.pressable}
                onPressIn={handleAssignTest}
            >
                <Text>Assign Test</Text>
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
// function print(func) { // sebagai param
//     const output = true
//     func(output) // Ketika dipanggil

// }

// print((output) => { // Sebagai argumen

// })

// function output(result) {}
// print(res => {})

