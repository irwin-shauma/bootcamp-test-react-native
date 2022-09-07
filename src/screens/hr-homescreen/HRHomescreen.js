import { View, Pressable, StyleSheet } from 'react-native'
import { Appbar, Button, FAB, Text, TouchableRipple, useTheme } from 'react-native-paper'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

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

    const { bottom } = useSafeAreaInsets();
    const theme = useTheme();
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

            <Appbar
                style={[
                    styles.bottom,
                    {
                        height: BOTTOM_APPBAR_HEIGHT + bottom,
                        backgroundColor: theme.colors.elevation.level2,
                    },
                ]}
                safeAreaInsets={{ bottom }}
            >
                <Appbar.Action icon="archive" onPress={() => { }} />
                <Appbar.Action icon="email" onPress={() => { }} />
                <Appbar.Action icon="label" onPress={() => { }} />
                <Appbar.Action icon="delete" onPress={() => { }} />
                <FAB
                    mode="flat"
                    size="medium"
                    icon="plus"
                    onPress={() => { }}
                    style={[
                        styles.fab,
                        { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
                    ]}
                />
            </Appbar>
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
    },
    bottom: {
        backgroundColor: 'aquamarine',
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },
    fab: {
        position: 'absolute',
        right: 16,
    },
})
// function print(func) { // sebagai param
//     const output = true
//     func(output) // Ketika dipanggil

// }

// print((output) => { // Sebagai argumen

// })

// function output(result) {}
// print(res => {})