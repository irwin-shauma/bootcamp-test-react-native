import { View, Pressable, StyleSheet } from 'react-native'
import { Button, Text, TouchableRipple } from 'react-native-paper'
import React from 'react'


export const HRHomescreen = ({ navigation }) => {



    const handlePressIn = () => {
        navigation.navigate('TestHeaderList')
    }


    return (
        <View>
            <TouchableRipple
                // onPress={() => }
                rippleColor='rgba(0,0,0, .32)'
            >
                <Button>Hello</Button>

            </TouchableRipple>



            <View style={{
                borderRadius: 50,
                overflow: 'hidden',
                alignSelf: 'center'
            }}>
                <Pressable
                    android_ripple={{ color: 'black', borderless: false }}
                    style={styles.container}
                    onPressIn={handlePressIn}
                    >
                    <Text>This is HR</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderColor: 'red',
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

